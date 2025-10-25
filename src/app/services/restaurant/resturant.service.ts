import { storageService } from "../async-storage.service";
import { restaurants as defaultRestaurants } from "../../data/restaurants"
import type { Restaurant } from "../../data/restaurants";
import { utilService } from "../util.service";

const STORAGE_KEY = 'restaurantDB'

export const restaurantService = {
    query,
    getById,
    // save,
    // remove,
    // getEmptyToy,
    // getDefaultFilter
}

async function query(): Promise<Restaurant[]> {
    let restaurants = await storageService.query<Restaurant>(STORAGE_KEY);

    if (!restaurants || restaurants.length === 0) {
        restaurants = bringRestaurants();
    }
    return restaurants;
}

function getById(restaurantId: string) {
    return storageService.get(STORAGE_KEY, restaurantId)
}

function bringRestaurants(): Restaurant[] {
    const copy: Restaurant[] = structuredClone(defaultRestaurants);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(copy));
    return copy;
}
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

async function query() {
    let restaurants = await storageService.query(STORAGE_KEY)
    if (!restaurants || !restaurants.length) {
        restaurants = bringRestaurants()
    }

    return restaurants
}

function getById(restaurantId: string) {
    return storageService.get(STORAGE_KEY, restaurantId)
}

function bringRestaurants(): Restaurant[] {
    // copy static data (avoid mutating original)
    const copy = structuredClone(defaultRestaurants)
    // save to storage for persistence
    utilService.saveToStorage(STORAGE_KEY, copy)
    return copy
}
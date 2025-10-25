"use client";
import { useEffect, useState } from "react";
import type { Restaurant } from "../../data/restaurants";
import { restaurantService } from "@/app/services/restaurant/resturant.service";
import { RestaurantsList } from "./RestaurantsList";

export function RestaurantsIndex() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  useEffect(() => {
        async function fetchRestaurants() {
            try {
                loadRestaurants()
            } catch (error) {
                console.log('Cannot load restaurants', error);
            }
        }
        fetchRestaurants()
    }, [])

    async function loadRestaurants() {
      const restaurants = await restaurantService.query()
      setRestaurants(restaurants)
      return restaurants
    }


  return <RestaurantsList restaurants={restaurants}  />;
}

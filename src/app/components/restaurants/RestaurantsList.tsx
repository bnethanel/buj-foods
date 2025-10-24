import React from "react";
import type { Restaurant } from "../../data/restaurants";
import { RestaurantPreview } from "./RestaurantPreview";

export function RestaurantsList({ restaurants }: { restaurants: Restaurant[] }) {
  return <section className="restaurants-list">
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12">
    {restaurants.map((restaurant) => (
      <li key={restaurant.id} >
        <RestaurantPreview
          restaurant={restaurant} />
      </li>
    ))
    }
    </ul>
  </section >;
}

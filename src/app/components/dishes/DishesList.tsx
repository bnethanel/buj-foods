import React from "react";
import type { Restaurant } from "../../data/restaurants";
import DishPreview from "./DishPreview";
import type { Dish } from "../../data/restaurants";



export function DishesList({ restaurant }: { restaurant: Restaurant }) {
    const { dishes } = restaurant;

    return <section className="dishes-list">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-40">
            {dishes.map((dish) => (
                <li key={dish.id} >
                    <DishPreview
                        dish={dish} restaurant={restaurant} />
                </li>
            ))
            }
        </ul>
    </section >;
}

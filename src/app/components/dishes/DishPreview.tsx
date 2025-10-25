import React from "react";
import type { Dish } from "../../data/restaurants";
import type { Restaurant } from "../../data/restaurants";
import Link from "next/link";
import Image from "next/image";

export default function DishPreview({ dish, restaurant }: { dish: Dish, restaurant: Restaurant}) {
    return <Link key={dish.id} href={`/restaurants/${restaurant.id}/${dish.id}`}>
        <div className="rounded-lg bg-white/5 hover:bg-white/10 p-3 transition">
            <Image src={dish.imageUrl} alt={dish.name} width={400} height={300} className="rounded-md w-full object-cover aspect-video" />
            <h3 className="mt-2 font-semibold text-lg">{dish.name}</h3>
            <p className="text-sm text-gray-400">{dish.price} ₪</p>
        </div>
    </Link>;
}

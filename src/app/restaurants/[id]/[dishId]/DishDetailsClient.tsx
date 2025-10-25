"use client";
import { Dish } from "@/app/data/restaurants";
import { cartService } from "@/app/services/cart/cart.service";
import Image from "next/image";
import React from "react";

export default function DishDetailsClient({ dish}: { dish: Dish }) {

    function onAddToCart(dish: Dish) {
        cartService.addToCart(dish)
    }

    return <div className="rounded-lg bg-white/5 hover:bg-white/10 p-3 transition">
        <Image
            src={dish.imageUrl}
            alt={dish.name}
            width={300}
            height={300}
            className="rounded-md object-cover aspect-video"
        />
        <h3 className="mt-2 font-semibold text-lg">{dish.name}</h3>
        <p className="text-sm text-gray-400">{dish.price} ₪</p>
        <button className="btn cursor-pointer" onClick={() => onAddToCart(dish)}>Add to cart</button>
    </div>;
}

import React from "react";
import type { Restaurant } from "../../data/restaurants";
import Link from "next/link";
import Image from "next/image";


export function RestaurantPreview({ restaurant }: { restaurant: Restaurant }) {
    console.log('restaurant:', restaurant);
    return (
    <Link
      href={`/restaurants/${restaurant._id}`}
      className="group block rounded-xl border border-black/10 bg-white/5 p-3 hover:bg-white/10 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 transition"
    >
      <div className="overflow-hidden rounded-lg">
        <Image
          src={restaurant.imageUrl }
          alt={restaurant.name}
          width={800}
          height={450}
          className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          priority={false}
        />
      </div>

      <div className="mt-3">
        <h3 className="text-lg font-semibold">{restaurant.name}</h3>
      </div>
    </Link>
  );;
}

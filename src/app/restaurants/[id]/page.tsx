// src/app/restaurants/[id]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { restaurants } from "../../data/restaurants";

type Params = { id: string };

export default async function RestaurantDetails({ params }: { params: Promise<Params>; }) {
    const { id } = await params;

    const restaurant = restaurants.find((r) => r.id === id);
    if (!restaurant) return notFound();

    return (
        <section className="space-y-4 py-8">
            <h1 className="text-3xl font-bold">{restaurant.name}</h1>
            <p className="text-gray-600">
                {restaurant.city} • {restaurant.address}
            </p>

            <Image
                src={restaurant.imageUrl}
                alt={restaurant.name}
                width={1000}
                height={500}
                className="rounded-xl w-full object-cover aspect-[16/9]"
            />
        </section>
    );
}

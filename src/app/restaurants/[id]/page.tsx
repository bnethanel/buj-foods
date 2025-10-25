// src/app/restaurants/[id]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { restaurants } from "../../data/restaurants";
import { DishesList } from "@/app/components/dishes/DishesList";

type Params = { id: string };

export default async function RestaurantDetails({ params }: { params: Promise<Params>; }) {
    const { id } = await params;
    console.log(restaurants, 'restaurants');

    const restaurant = restaurants.find((r) => r._id === id);
    if (!restaurant) return notFound();

    return (
        <>
            <section className="relative -mt-28">
                <div className="full-bleed relative h-[40vh] md:h-[38vh] lg:h-[38vh]">
                    <Image
                        src={restaurant.imageUrl}
                        alt={restaurant.name}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
                </div>

                <div className="absolute bottom-6 text-white z-20">
                    <h1 className="text-3xl font-bold">{restaurant.name}</h1>
                    <p className="opacity-80">{restaurant.city} • {restaurant.address}</p>
                </div>
            </section>

            <DishesList restaurant={restaurant} />
        </>

    );
}

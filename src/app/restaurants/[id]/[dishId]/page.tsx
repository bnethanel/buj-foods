import React from "react";
import { restaurants } from "../../../data/restaurants"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Dish } from "../../../data/restaurants";
import { cartService } from "../../../services/cart/cart.service";
import DishDetailsClient from "./DishDetailsClient";


type Params = { id: string, dishId: string };

export default async function DishDetails({ params }: { params: Promise<Params>; }) {

  const { id, dishId } = await params

  const restaurant = restaurants.find((r) => r.id === id);
  if (!restaurant) return notFound();

  const dish = restaurant.dishes.find(d => d.id === dishId)
  if (!dish) return notFound()

  return (
    <DishDetailsClient dish={dish} />
  )
}

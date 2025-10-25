import { restaurants } from "../../../data/restaurants"
import { notFound } from "next/navigation"
import DishDetailsClient from "./DishDetailsClient";


type Params = { id: string, dishId: string };

export default async function DishDetails({ params }: { params: Promise<Params>; }) {

  const { id, dishId } = await params

  const restaurant = restaurants.find((r) => r._id === id);
  if (!restaurant) return notFound();

  const dish = restaurant.dishes.find(d => d._id === dishId)
  if (!dish) return notFound()

  return (
    <DishDetailsClient dish={dish} />
  )
}

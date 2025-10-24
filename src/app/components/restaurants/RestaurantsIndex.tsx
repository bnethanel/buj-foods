// import { Restaurant } from "@prisma/client";
import type { Restaurant } from "../../data/restaurants";
import { RestaurantsList } from "./RestaurantsList";

export function RestaurantsIndex({ restaurants }: { restaurants: Restaurant[] }) {
  return <RestaurantsList restaurants={restaurants}  />;
}

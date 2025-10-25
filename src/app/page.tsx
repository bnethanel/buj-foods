import { RestaurantsIndex } from "./components/restaurants/RestaurantsIndex";
import {restaurants} from "./data/restaurants";


export default function Home() {
// console.log(restaurants);
  return (
    <>
      <RestaurantsIndex/>
    </>
  );
}

import type { Dish } from '../../data/restaurants';

export const cartService = {
    addToCart
}

function addToCart(dish : Dish) {
    console.log(dish)
}
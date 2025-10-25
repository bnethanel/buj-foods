export type Dish = {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
};

export type Restaurant = {
    id: string;
    name: string;
    city: string;
    address: string;
    imageUrl: string;
    dishes: Dish[];
};

export const restaurants: Restaurant[] = [
    {
        id: "r1",
        name: "Pizza Roni",
        city: "Tel Aviv",
        address: "Dizengoff 100",
        imageUrl: "/images/default-restaurant.png",
        dishes: [
            {
                id: "d1",
                name: "Margherita Pizza",
                price: 48,
                description: "Classic tomato sauce, mozzarella, and fresh basil.",
                imageUrl: "/images/default-restaurant.png",
            },
            {
                id: "d2",
                name: "Pepperoni Pizza",
                price: 55,
                description: "Spicy pepperoni with mozzarella and tomato sauce.",
                imageUrl: "/images/default-restaurant.png",
            },
        ],
    },
    {
        id: "r2",
        name: "Falafel King",
        city: "Jerusalem",
        address: "King George 12",
        imageUrl: "/images/default-restaurant.png",
        dishes: [
            {
                id: "d3",
                name: "Falafel Pita",
                price: 25,
                description: "Crispy falafel balls in pita with tahini and salad.",
                imageUrl: "/images/default-restaurant.png",
            },
            {
                id: "d4",
                name: "Hummus Plate",
                price: 32,
                description: "Creamy hummus served with warm pita and olive oil.",
                imageUrl: "/images/default-restaurant.png",
            },
        ],
    },
    {
        id: "r3",
        name: "Sushi Tora",
        city: "Herzliya",
        address: "Maskit 10",
        imageUrl: "/images/default-restaurant.png",
        dishes: [
            {
                id: "d5",
                name: "Salmon Nigiri (6 pcs)",
                price: 58,
                description: "Fresh salmon slices over seasoned rice.",
                imageUrl: "/images/default-restaurant.png",
            },
            {
                id: "d6",
                name: "Tuna Roll",
                price: 49,
                description: "Classic tuna maki with rice and seaweed.",
                imageUrl: "/images/default-restaurant.png",
            },
        ],
    },
];
export type Restaurant = {
    id: string;
    name: string;
    city: string;
    address: string;
    imageUrl: string;
};

export const restaurants: Restaurant[] = [
    { id: "r1", name: "Pizza Roni", city: "Tel Aviv", address: "Dizengoff 100", imageUrl: "/images/default-restaurant.png", },
    { id: "r2", name: "Falafel King", city: "Jerusalem", address: "King George 12", imageUrl: "/images/default-restaurant.png" },
    { id: "r3", name: "Sushi Tora", city: "Herzliya", address: "Maskit 10", imageUrl: "/images/default-restaurant.png" },
];
// data/restaurants.ts
export type Dish = {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

export type Restaurant = {
  _id: string;
  name: string;
  city: string;
  address: string;
  imageUrl: string;
  dishes: Dish[];
};

export const restaurants: Restaurant[] = [
  {
    _id: "r1",
    name: "Pizza Roni",
    city: "Tel Aviv",
    address: "Dizengoff 100",
    imageUrl: "/images/default-restaurant.png",
    dishes: [
      { _id: "d1", name: "Margherita Pizza", price: 48, description: "Classic tomato sauce, mozzarella, and fresh basil.", imageUrl: "/images/default-restaurant.png" },
      { _id: "d2", name: "Pepperoni Pizza", price: 55, description: "Spicy pepperoni with mozzarella and tomato sauce.", imageUrl: "/images/default-restaurant.png" },
      { _id: "d3", name: "Four Cheese Pizza", price: 62, description: "Mozzarella, gorgonzola, parmesan, and pecorino.", imageUrl: "/images/default-restaurant.png" },
      { _id: "d4", name: "Veggie Supreme", price: 58, description: "Peppers, onions, olives, mushrooms, and basil.", imageUrl: "/images/default-restaurant.png" },
      { _id: "d5", name: "Truffle Mushroom Pizza", price: 68, description: "Cream base, wild mushrooms, truffle oil, parsley.", imageUrl: "/images/default-restaurant.png" },
      { _id: "d6", name: "Garlic Knots (6 pcs)", price: 18, description: "Baked knots brushed with garlic butter and herbs.", imageUrl: "/images/default-restaurant.png" },
    ],
  },
  {
    _id: "r2",
    name: "Falafel King",
    city: "Jerusalem",
    address: "King George 12",
    imageUrl: "/images/default-restaurant.png",
    dishes: [
      { _id: "d7", name: "Falafel Pita", price: 25, description: "Crispy falafel balls in pita with tahini and salad.", imageUrl: "/images/default-restaurant.png" },
      { _id: "d8", name: "Hummus Plate", price: 32, description: "Creamy hummus served with warm pita and olive oil.", imageUrl: "/images/default-restaurant.png" },
      { _id: "d9", name: "Sabich Pita", price: 29, description: "Eggplant, egg, amba, tahini, salad, and herbs.", imageUrl: "/images/default-restaurant.png" },
      { _id: "d10", name: "Masabacha", price: 36, description: "Warm hummus with whole chickpeas, lemon, and garlic.", imageUrl: "/images/default-restaurant.png" },
      { _id: "d11", name: "Greek Salad", price: 28, description: "Tomato, cucumber, olives, feta, and oregano.", imageUrl: "/images/default-restaurant.png" },
      { _id: "d12", name: "Fries with Tahini", price: 18, description: "Crispy fries drizzled with tahini and parsley.", imageUrl: "/images/default-restaurant.png" },
    ],
  },
  {
    _id: "r3",
    name: "Sushi Tora",
    city: "Herzliya",
    address: "Maskit 10",
    imageUrl: "/images/default-restaurant.png",
    dishes: [
      { _id: "d13", name: "Salmon Nigiri (6 pcs)", price: 58, description: "Fresh salmon slices over seasoned rice.", imageUrl: "/images/default-restaurant.png" },
      { _id: "d14", name: "Tuna Roll", price: 49, description: "Classic tuna maki with rice and seaweed.", imageUrl: "/images/default-restaurant.png" },
      { _id: "d15", name: "Avocado Cucumber Roll", price: 42, description: "Light veggie roll with sesame and wasabi.", imageUrl: "/images/default-restaurant.png" },
      { _id: "d16", name: "Rainbow Roll", price: 64, description: "California roll topped with assorted fish.", imageUrl: "/images/default-restaurant.png" },
      { _id: "d17", name: "Spicy Salmon Roll", price: 56, description: "Salmon with chili mayo and scallions.", imageUrl: "/images/default-restaurant.png" },
      { _id: "d18", name: "Miso Soup", price: 14, description: "Traditional miso with tofu and wakame.", imageUrl: "/images/default-restaurant.png" },
    ],
  },
  {
    _id: "r4",
    name: "Burger Lab",
    city: "Ramat Gan",
    address: "Jabotinsky 45",
    imageUrl: "/images/default-restaurant.png",
    dishes: [
      { _id: "d19", name: "Classic Beef Burger", price: 52, description: "200g beef patty, lettuce, tomato, pickles, house sauce.", imageUrl: "/images/default-restaurant.png" },
      { _id: "d20", name: "Cheeseburger", price: 56, description: "Beef patty with cheddar and caramelized onions.", imageUrl: "/images/default-restaurant.png" },
      { _id: "d21", name: "BBQ Bacon Burger", price: 62, description: "Beef, BBQ glaze, crispy bacon, onion ring.", imageUrl: "/images/default-restaurant.png" },
      { _id: "d22", name: "Fried Chicken Burger", price: 54, description: "Crispy chicken, coleslaw, pickles, spicy mayo.", imageUrl: "/images/default-restaurant.png" },
      { _id: "d23", name: "Sweet Potato Fries", price: 22, description: "Baked and lightly salted, with aioli.", imageUrl: "/images/default-restaurant.png" },
      { _id: "d24", name: "Onion Rings", price: 20, description: "Beer-battered rings with ranch dip.", imageUrl: "/images/default-restaurant.png" },
    ],
  },
];

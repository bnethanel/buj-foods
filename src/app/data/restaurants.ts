// data/restaurants.ts
import { utilService } from "../services/util.service";

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

const id = () => utilService.makeId();

export const restaurants: Restaurant[] = [
  {
    _id: id(),
    name: "Pizza Roni",
    city: "Tel Aviv",
    address: "Dizengoff 100",
    imageUrl: "/images/default-restaurant.png",
    dishes: [
      { _id: id(), name: "Margherita Pizza", price: 48, description: "Classic tomato sauce, mozzarella, and fresh basil.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Pepperoni Pizza", price: 55, description: "Spicy pepperoni with mozzarella and tomato sauce.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Four Cheese Pizza", price: 62, description: "Mozzarella, gorgonzola, parmesan, and pecorino.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Veggie Supreme", price: 58, description: "Peppers, onions, olives, mushrooms, and basil.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Truffle Mushroom Pizza", price: 68, description: "Cream base, wild mushrooms, truffle oil, parsley.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Garlic Knots (6 pcs)", price: 18, description: "Baked knots brushed with garlic butter and herbs.", imageUrl: "/images/default-restaurant.png" },
    ],
  },
  {
    _id: id(),
    name: "Falafel King",
    city: "Jerusalem",
    address: "King George 12",
    imageUrl: "/images/default-restaurant.png",
    dishes: [
      { _id: id(), name: "Falafel Pita", price: 25, description: "Crispy falafel balls in pita with tahini and salad.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Hummus Plate", price: 32, description: "Creamy hummus served with warm pita and olive oil.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Sabich Pita", price: 29, description: "Eggplant, egg, amba, tahini, salad, and herbs.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Masabacha", price: 36, description: "Warm hummus with whole chickpeas, lemon, and garlic.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Greek Salad", price: 28, description: "Tomato, cucumber, olives, feta, and oregano.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Fries with Tahini", price: 18, description: "Crispy fries drizzled with tahini and parsley.", imageUrl: "/images/default-restaurant.png" },
    ],
  },
  {
    _id: id(),
    name: "Sushi Tora",
    city: "Herzliya",
    address: "Maskit 10",
    imageUrl: "/images/default-restaurant.png",
    dishes: [
      { _id: id(), name: "Salmon Nigiri (6 pcs)", price: 58, description: "Fresh salmon slices over seasoned rice.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Tuna Roll", price: 49, description: "Classic tuna maki with rice and seaweed.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Avocado Cucumber Roll", price: 42, description: "Light veggie roll with sesame and wasabi.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Rainbow Roll", price: 64, description: "California roll topped with assorted fish.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Spicy Salmon Roll", price: 56, description: "Salmon with chili mayo and scallions.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Miso Soup", price: 14, description: "Traditional miso with tofu and wakame.", imageUrl: "/images/default-restaurant.png" },
    ],
  },
  {
    _id: id(),
    name: "Burger Lab",
    city: "Ramat Gan",
    address: "Jabotinsky 45",
    imageUrl: "/images/default-restaurant.png",
    dishes: [
      { _id: id(), name: "Classic Beef Burger", price: 52, description: "200g beef patty, lettuce, tomato, pickles, house sauce.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Cheeseburger", price: 56, description: "Beef patty with cheddar and caramelized onions.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "BBQ Bacon Burger", price: 62, description: "Beef, BBQ glaze, crispy bacon, onion ring.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Fried Chicken Burger", price: 54, description: "Crispy chicken, coleslaw, pickles, spicy mayo.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Sweet Potato Fries", price: 22, description: "Baked and lightly salted, with aioli.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Onion Rings", price: 20, description: "Beer-battered rings with ranch dip.", imageUrl: "/images/default-restaurant.png" },
    ],
  },
  {
    _id: id(),
    name: "Sabich Shel Ima",
    city: "Giv'atayim",
    address: "Katznelson 7",
    imageUrl: "/images/default-restaurant.png",
    dishes: [
      { _id: id(), name: "Sabich Classic", price: 27, description: "Eggplant, egg, potato, tahini, amba, herbs.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Sabich Spicy", price: 29, description: "Classic sabich with zhug and chili flakes.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Eggplant Salad", price: 24, description: "Roasted eggplant with tahini and lemon.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Lemonade", price: 10, description: "Freshly squeezed lemon and mint.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Tahini Cookies (4)", price: 16, description: "Sesame tahini shortbread bites.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Pita Chips", price: 12, description: "Crispy pita shards with za'atar.", imageUrl: "/images/default-restaurant.png" },
    ],
  },
  {
    _id: id(),
    name: "Shawarma Hatikva",
    city: "Tel Aviv",
    address: "Hatikva 36",
    imageUrl: "/images/default-restaurant.png",
    dishes: [
      { _id: id(), name: "Shawarma Laffa", price: 45, description: "Turkey shawarma with salads and tahini in laffa.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Shawarma Pita", price: 39, description: "Pita version with pickles and amba.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Jerusalem Mix", price: 52, description: "Fried mix with onions and spices, served with pita.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Chip Salad", price: 18, description: "Fries topped with tahini and parsley.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Green Salad", price: 17, description: "Cabbage, cucumber, dill, lemon.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Pita + Hummus", price: 12, description: "Warm pita with hummus dip.", imageUrl: "/images/default-restaurant.png" },
    ],
  },
  {
    _id: id(),
    name: "Pasta e Basta",
    city: "Tel Aviv",
    address: "Rothschild 98",
    imageUrl: "/images/default-restaurant.png",
    dishes: [
      { _id: id(), name: "Spaghetti Pomodoro", price: 44, description: "Tomato sauce, basil, parmesan.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Fettuccine Alfredo", price: 52, description: "Cream sauce with parmesan and butter.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Penne Arrabbiata", price: 49, description: "Chili and garlic tomato sauce.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Pesto Genovese", price: 55, description: "Basil pesto, pine nuts, parmesan.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Gnocchi Funghi", price: 58, description: "Creamy mushroom sauce on potato gnocchi.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Tiramisu", price: 28, description: "Classic espresso dessert.", imageUrl: "/images/default-restaurant.png" },
    ],
  },
  {
    _id: id(),
    name: "Thai Street",
    city: "Rishon LeZion",
    address: "Herzl 22",
    imageUrl: "/images/default-restaurant.png",
    dishes: [
      { _id: id(), name: "Pad Thai Chicken", price: 54, description: "Rice noodles, tamarind, peanuts, egg.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Green Curry", price: 59, description: "Coconut curry with bamboo and basil.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Tom Yum Soup", price: 36, description: "Hot & sour soup with lemongrass and lime.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Pineapple Fried Rice", price: 52, description: "Wok-fried rice with pineapple and cashews.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Chicken Satay (4)", price: 38, description: "Skewers with peanut sauce.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Mango Sticky Rice", price: 28, description: "Coconut sticky rice with mango.", imageUrl: "/images/default-restaurant.png" },
    ],
  },
  {
    _id: id(),
    name: "Vegan Garden",
    city: "Haifa",
    address: "Horev 5",
    imageUrl: "/images/default-restaurant.png",
    dishes: [
      { _id: id(), name: "Buddha Bowl", price: 48, description: "Quinoa, chickpeas, avocado, roasted veg, tahini.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Vegan Burger", price: 52, description: "Plant patty with lettuce, tomato, and aioli.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Roasted Cauliflower", price: 39, description: "With lemon, tahini, and herbs.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Tofu Stir-Fry", price: 46, description: "Tofu, veggies, soy-ginger glaze, rice.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Green Power Smoothie", price: 22, description: "Spinach, banana, almond milk.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Chocolate Mousse (vegan)", price: 24, description: "Dark chocolate and coconut cream.", imageUrl: "/images/default-restaurant.png" },
    ],
  },
  {
    _id: id(),
    name: "Cafe Levinsky",
    city: "Tel Aviv",
    address: "Levinsky 30",
    imageUrl: "/images/default-restaurant.png",
    dishes: [
      { _id: id(), name: "Shakshuka", price: 42, description: "Tomato-pepper stew with eggs and herbs.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Bourekas Plate", price: 34, description: "Cheese bourekas with egg and pickles.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Granola Yogurt", price: 26, description: "Homemade granola with seasonal fruit.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Avocado Toast", price: 36, description: "Sourdough, avocado, chili, lemon.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Iced Coffee", price: 16, description: "Cold brew with milk or oat milk.", imageUrl: "/images/default-restaurant.png" },
      { _id: id(), name: "Malabi", price: 22, description: "Rosewater pudding with pistachio and syrup.", imageUrl: "/images/default-restaurant.png" },
    ],
  },
];

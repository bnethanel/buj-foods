import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const count = await prisma.restaurant.count();
  if (count > 0) {
    console.log("Restaurants already exist, skipping seed.");
    return;
  }

  await prisma.restaurant.createMany({
    data: [
      {
        name: "Pizza Roni",
        city: "Tel Aviv",
        address: "Dizengoff 100",
        lat: 32.0853,
        lng: 34.7818,
      },
      {
        name: "Falafel King",
        city: "Jerusalem",
        address: "King George 12",
        lat: 31.7683,
        lng: 35.2137,
      },
      {
        name: "Sushi Tora",
        city: "Herzliya",
        address: "Maskit 10",
        lat: 32.1591,
        lng: 34.8113,
      },
      {
        name: "Burger Boss",
        city: "Haifa",
        address: "Ben Gurion 33",
        lat: 32.8191,
        lng: 34.9989,
      },
    ],
  });

  console.log("Seed completed: added sample restaurants!");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
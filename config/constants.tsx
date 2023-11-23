import { CarSearchFilterPropsStrict } from "@/typings.d";

export const moderators = ["demoUser"];
export const ITEMS_PER_PAGE = 5;

export const manufacturers = [
  "Acura",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Buick",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "GMC",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lexus",
  "Lincoln",
  "Maserati",
  "Mazda",
  "McLaren",
  "Mercedes-Benz",
  "MINI",
  "Mitsubishi",
  "Nissan",
  "Porsche",
  "Ram",
  "Rolls-Royce",
  "Subaru",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
];

const currentYear = new Date().getUTCFullYear();
export const yearsOfProduction: number[] = Array(
  currentYear - (currentYear - 60)
)
  .fill(1)
  .map((v, idx) => currentYear - idx);

export const fuels: CarSearchFilterPropsStrict["fuel"][] = [
  "gas",
  "hybrid",
  "electricity",
];

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];

export const mostDesiredSuperCars = [
  { make: "PORCHE", model: "MACAN", year: 2022 },
  { make: "LAMBORGHINI", model: "AVENTADOR SVJ", year: 2022 },
  // { make: "Mercedes-AMG", model: "ONE", year: 2022 },
  { make: "BUGATTI", model: "CHIRON SUPER SPORT 300+", year: 2022 },
  // { make: "BUGATTI", model: "LA VOITURE NOIRE", year: 2022 },
  { make: "PORSCHE", model: "TAYCAN", year: 2022 },
  { make: "ROLLS-ROYCE", model: "DAWN", year: 2022 },
  { make: "PORSCHE", model: "911 CARRERA S", year: 2022 },
  { make: "ROLLS-ROYCE", model: "GHOST", year: 2022 },
  { make: "BENTLEY", model: "CONTINENTAL GT", year: 2022 },
];

export const keysSearchFilters: (keyof CarSearchFilterPropsStrict)[] = [
  // keys from
  "model",
  "manufacturer",
  "year",
  "fuel",
  "limit",
  "page",
];

"use client";

import { HeroParallax } from "./ui/hero-parallax";
import {
  allalert,
  Fitness_App,
  gedinStudio,
  mart4all,
  expanol,
  Qraftconnect,
  saloon,
  cloudstreet,
} from "../assets";

export function HeroParallaxSection() {
  return (
    <div>
      <HeroParallax products={products} id={products.id} />;
    </div>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export const products = [
  {
    id: 1,
    title: "Meal Planner",
    link: "http://mealplanner.codeaugment.com/",
    thumbnail: Fitness_App,
  },
  {
    id: 2,
    title: "Gedin Studio",
    link: "https://www.gedinstudio.se/",
    thumbnail: gedinStudio,
  },
  {
    id: 3,
    title: "Expanol",
    link: "https://expanol.codeaugment.com/",
    thumbnail: expanol,
  },
  {
    id: 4,
    title: "Cloud Street",
    link: "https://cloudstreet.pk/",
    thumbnail: cloudstreet,
  },
  {
    id: 5,
    title: "MART 4 ALL PRIVATE LIMITED",
    link: "https://www.mart-4-all.com/",
    thumbnail: mart4all,
  },
  {
    id: 6,
    title: "QraftConnect",
    link: "https://qraftconnect.se/",
    thumbnail: Qraftconnect,
  },
  {
    id: 7,
    title: "All Alert",
    link: "https://allalert.com/",
    thumbnail: allalert,
  },
  {
    id: 8,
    title: "Expanol",
    link: "https://expanol.in/",
    thumbnail: expanol,
  },
  {
    id: 9,
    title: "Saloon",
    link: "https://saloon1051.netlify.app/",
    thumbnail: saloon,
  },
];

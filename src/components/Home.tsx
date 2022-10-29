import React from "react";
import { HomeCategories } from "react-ecommerce-ui-kit";


export const Home = () => {
   return (
      <div>
         <HomeCategories HomeCategories={[
            { category: "Salts", image: "images/salts.webp", url: "/salts",},
            { category: "Soaks", image: "images/soaks.webp", url: "/soaks",},
            { category: "Masks", image: "images/masks.webp", url: "/masks",},
            { category: "Gifts", image: "images/gifts.webp", url: "/gifts",}
         ]}/>
      </div>
   )
};
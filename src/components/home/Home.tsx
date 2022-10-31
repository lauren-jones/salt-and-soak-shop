import React from "react";
import './home.css';
import { HomeCategories } from "react-ecommerce-ui-kit";
import { Values } from "react-ecommerce-ui-kit";
import { RecommendedProducts } from "react-ecommerce-ui-kit";
import { productsData } from "../../data/products";


export const Home = () => {
   return (
      <div>
         <section className="top-banner-section">
            <div className="top-banner-section-text">
               <p className="top-banner-subheading">Get cosy</p>
               <h2 className="top-banner-heading">Autumn is here!</h2>
            </div>
         </section>
         <section className="trending-products-section">
            <RecommendedProducts title="Autumn favourites" products={[productsData[0], productsData[14], productsData[23]]}/>
         </section>
         <section className="categories-section">
            <HomeCategories HomeCategories={[
               { category: "Salts", image: "/images/home/salts.webp", url: "/category/salts",},
               { category: "Steams", image: "/images/home/soaks.webp", url: "/category/steams",},
               { category: "Masks", image: "/images/home/masks.webp", url: "/category/masks",},
               { category: "Gifts", image: "/images/home/gifts.webp", url: "/category/gifts",}
            ]}/>
         </section>
         <section className="values-section">
            <Values title="Our ethics" values={[{
               heading: "100% Cruelty Free",
               description: "We're proud to be totally cruelty free - none of our ingredients or finished products are tested on animals!",
               image: "/images/home/vegan.webp",
            },
            {
               heading: "Totally Eco-Friendly",
               description: "Our products and packaging are 100% plastic-free! We're talking compostable, biodegradable & re-useable only.",
               image: "/images/home/earth.webp",
            },
            {
               heading: "Completely Vegan",
               description: "We're big animal lovers, so we don't use any animal products or by-products in our goodies!",
               image: "/images/home/leaf.webp",
            }]} />
         </section>
      </div>
   )
};
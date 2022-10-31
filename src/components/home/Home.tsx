import React from "react";
import './home.css';
import { HomeCategories } from "react-ecommerce-ui-kit";
import { Values } from "react-ecommerce-ui-kit";
import { RecommendedProducts } from "react-ecommerce-ui-kit";


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
            <RecommendedProducts title="Autumn favourites" products={[
               {
                  id: 1,
                  category: "salts",
                  onSale: false,
                  description: "",
                  url: "/",
                     additionalInfo: [{title: 'Ingredients', content: 'Our unique blends of muscle-soothing Epsom salts, detoxifying Dead Sea salts and pink Himalayan rock salts hydrate your skin and relax your mind!'},
                     {title: 'How to use', content: 'We recommend a full handful of salts for a relaxing bath, or two handfuls if you’ve got some aches to fix.'},
                     {title: 'Delivery', content: 'We deliver across the UK via Royal Mail and offer two delivery options. Standard Delivery under £35 (3 - 5 working days) - £3.40. Special Delivery (1 - 2 working days) £5.00.'},
                  ],
                  currentPrice: 12.00,
                  originalPrice: 12.00,
                  images: ["/images/salts/magic_1.webp", "/images/salts/magic_2.webp"],
                  name: 'Wild Ride',
               },
               {
                  id: 1,
                  category: "salts",
                  onSale: false,
                  description: "",
                  url: "/",
                     additionalInfo: [{title: 'Ingredients', content: 'Our unique blends of muscle-soothing Epsom salts, detoxifying Dead Sea salts and pink Himalayan rock salts hydrate your skin and relax your mind!'},
                     {title: 'How to use', content: 'We recommend a full handful of salts for a relaxing bath, or two handfuls if you’ve got some aches to fix.'},
                     {title: 'Delivery', content: 'We deliver across the UK via Royal Mail and offer two delivery options. Standard Delivery under £35 (3 - 5 working days) - £3.40. Special Delivery (1 - 2 working days) £5.00.'},
                  ],
                  currentPrice: 12.00,
                  originalPrice: 12.00,
                  images: ["/images/salts/magic_1.webp", "/images/salts/magic_2.webp"],
                  name: 'Wild Ride',
               },
               {
                  id: 1,
                  category: "salts",
                  onSale: false,
                  description: "",
                  url: "/",
                     additionalInfo: [{title: 'Ingredients', content: 'Our unique blends of muscle-soothing Epsom salts, detoxifying Dead Sea salts and pink Himalayan rock salts hydrate your skin and relax your mind!'},
                     {title: 'How to use', content: 'We recommend a full handful of salts for a relaxing bath, or two handfuls if you’ve got some aches to fix.'},
                     {title: 'Delivery', content: 'We deliver across the UK via Royal Mail and offer two delivery options. Standard Delivery under £35 (3 - 5 working days) - £3.40. Special Delivery (1 - 2 working days) £5.00.'},
                  ],
                  currentPrice: 12.00,
                  originalPrice: 12.00,
                  images: ["/images/salts/magic_1.webp", "/images/salts/magic_2.webp"],
                  name: 'Wild Ride',
               },
            ]}/>
         </section>
         <section className="categories-section">
            <HomeCategories HomeCategories={[
               { category: "Salts", image: "/images/home/salts.webp", url: "/salts",},
               { category: "Soaks", image: "/images/home/soaks.webp", url: "/soaks",},
               { category: "Masks", image: "/images/home/masks.webp", url: "/masks",},
               { category: "Gifts", image: "/images/home/gifts.webp", url: "/gifts",}
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
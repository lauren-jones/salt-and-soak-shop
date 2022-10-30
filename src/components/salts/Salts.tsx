import React from 'react';
import { saltsCategory } from '../../data/salts';
import { ProductCard } from 'react-ecommerce-ui-kit';
import './category-page.css';

export const Salts = () => {

 return (
    <div className="category-page-wrapper">
      <h2 className="category-title">Bath Salts</h2>
      <p className="category-description">Skin-soothing salts, beautiful botanicals and essential oil blends - these salts are the ultimate in bath time satisfaction.</p>
      <div className="category-products-container">
         {
            saltsCategory.map(function (salt, index) {
               return (
                  <div className="category-product-container">
                     <ProductCard product={salt} />
                  </div>
               )
            })
         }
      </div>
    </div>
 )
};
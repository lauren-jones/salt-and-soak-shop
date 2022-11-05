import React from 'react';
import { productsData } from '../../data/products';
import { categoriesData } from '../../data/categories';
import { ProductCard } from 'react-ecommerce-ui-kit';
import './category.css';
import { useParams } from 'react-router-dom';

export const Category = () => {

    const { name } = useParams();

    const category = categoriesData.filter(category => category.name.toLowerCase() === name);

    const products = productsData.filter(product => product.category.toLowerCase() === name)

    return (
        <div className="category-page-wrapper">
         <h2 className="category-title">{category[0].name}</h2>
         <p className="category-description">{category[0].description}</p>
         <div className="category-products-container">
            {
               products.map(function (product, index) {
                  return (
                     <div className="category-product-container" key={index}>
                        <ProductCard product={product} />
                     </div>
                  )
               })
            }
         </div>
      </div>
    )
}
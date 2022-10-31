import React from "react";
import { useParams } from "react-router-dom"
import './product.css';
import { productsData } from "../../data/products";
import { ProductPage, RecommendedProducts } from "react-ecommerce-ui-kit";

export default function Product() {

    const { name } = useParams();

    const chosenProduct = productsData.filter(product => product.name.toLowerCase() === name);

    return (
        <div>
            <ProductPage product={chosenProduct[0]}/>
            <div className="recommended-products-section">
                <RecommendedProducts title="You may also like" products={[productsData[0], productsData[1], productsData[2]]} />
            </div>
        </div>
    )
}
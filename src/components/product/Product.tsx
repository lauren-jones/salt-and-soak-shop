import React from "react";
import { useParams } from "react-router-dom"
import './product.css';
import { productsData } from "../../data/products";
import { ProductPage, RecommendedProducts } from "react-ecommerce-ui-kit";

export default function Product() {

    const { name } = useParams();

    const chosenProduct = productsData.filter(product => product.name.toLowerCase() === name);

    const start = chosenProduct[0].id;
    const end = productsData.length - 1;

    return (
        <div>
            <ProductPage product={chosenProduct[0]}/>
            <div className="recommended-products-section">
                <RecommendedProducts title="You may also like" products={[productsData[(start) % end], productsData[(start + 1) % end], productsData[(start + 2) % end]]} />
            </div>
        </div>
    )
}
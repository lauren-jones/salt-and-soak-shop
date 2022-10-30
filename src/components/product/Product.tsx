import React from "react";
import { useParams } from "react-router-dom"
import './product.css';
import { saltsCategory } from "../../data/salts";
import { ProductPage, RecommendedProducts } from "react-ecommerce-ui-kit";

export default function Product() {

    const { name } = useParams();

    const chosenProduct = saltsCategory.filter(product => product.name.toLowerCase() === name);

    return (
        <div>
            <ProductPage product={chosenProduct[0]}/>
            <div className="recommended-products-section">
                <RecommendedProducts title="You may also like" products={[saltsCategory[0], saltsCategory[1], saltsCategory[2]]} />
            </div>
        </div>
    )
}
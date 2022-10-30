import React from "react";
import { useParams } from "react-router-dom"
import './product.css';
import { saltsCategory } from "../../data/salts";
import { ProductPage } from "react-ecommerce-ui-kit";

export default function Product() {

    const { name } = useParams();

    const chosenProduct = saltsCategory.filter(product => product.name.toLowerCase() === name);

    return (
        <div>
            <ProductPage product={chosenProduct[0]}/>
        </div>
    )
}
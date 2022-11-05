import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import './product.css';
import { productsData } from "../../data/products";
import { Session } from "../../data/session";
import { ProductPage, RecommendedProducts } from "react-ecommerce-ui-kit";

export default function Product() {

    // Get product data
    const { name } = useParams();
    const chosenProduct = productsData.filter(product => product.name.toLowerCase() === name);

    // Required for retrieving recommended products from data
    const start = chosenProduct[0].id;
    const end = productsData.length - 1;

    // Handle product quantity changes
    const [counter, setCounter] = useState(1);

    // Perform any actions here when swapping between products
    useEffect(() => {
        setCounter(1);
    }, [name])

    const HandleIncrease = () => {
        setCounter(counter + 1);
    }

    const HandleDecrease = () => {
        if (counter === 1) {
            setCounter(1);
        } else {
            setCounter(counter - 1);
        }
    }

    // Handle add to basket
    const AddToCart = () => {
        Session.push({product: chosenProduct[0], quantity: counter});
    }

    return (
        <div>
            <ProductPage key={chosenProduct[0].id} product={chosenProduct[0]} AddToCart={AddToCart} HandleIncrease={HandleIncrease} HandleDecrease={HandleDecrease} quantity={counter} />
            <div className="recommended-products-section">
            <RecommendedProducts title="You may also like" products={[productsData[(start) % end], productsData[(start + 1) % end], productsData[(start + 2) % end]]} />
            </div>
        </div>
    )
}
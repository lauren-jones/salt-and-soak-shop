import React from "react";
import { Cart, cartProducts } from "react-ecommerce-ui-kit";
import { productsData } from "../../data/products";
import './shopping-cart.css';

export const ShoppingCart = () => {

    const myCart: cartProducts = [
        {product: productsData[0], quantity: 2},
        {product: productsData[0], quantity: 2},
        {product: productsData[0], quantity: 2}
    ];

    const handleUpdate = () => {
        //To be implemented
    }

    const handleDelete = () => {
        //To be implemented
    }

    const toCheckout = () => {
        //To be implemented
    }

    return (
        <div className="shopping-cart">
            <Cart cartProducts={myCart} handleUpdate={handleUpdate} handleDelete={handleDelete} toCheckout={toCheckout}/>
        </div>
    )
}
import React  from "react";
import { Cart } from "react-ecommerce-ui-kit";
import { Session } from "../../data/session";
import './shopping-cart.css';

export const ShoppingCart = () => {

    const handleUpdate = () => {
        //To be implemented
    }

    const handleDelete = () => {
        //To be implemented
    }

    const toCheckout = () => {
        //To be implemented
    }

    const handleIncrease = () => {
        //To be implemented
    }

    const handleDecrease = () => {
        //To be implemented
    }

    return (
        <div className="shopping-cart">
            <div className="notice-box">
                <p> * please note this cart is for presentational purposes only, and the functionality to update and delete products has not yet been implemented. *</p>
            </div>
            <Cart cartProducts={Session} handleUpdate={handleUpdate} handleDelete={handleDelete} toCheckout={toCheckout} HandleIncrease={handleIncrease} HandleDecrease={handleDecrease}/>
        </div>
    )
}
import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';



function emptyCart() {  // RUNS THIS IF NOTHING IS ADDED TO SHOPPING CART
    
    return (
    <div className = "Cart"> 
    <h1 className = "Cart-header">Shopping Cart</h1>


    <h5>Your cart is currently empty.</h5>
    <h6>Continue browsing<a href="">Homepage</a></h6>
        
    
    </div>

    )
}

const addToCart = (Book) => {
    
}

function Cart(books) {   // RUNS THIS ID IF ANY BOOK IS ADDED TO CART

}

export default emptyCart;
import React, { Component, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {addToCart} from './CartActions';
import {removeFromCart} from './CartActions';
import {useDispatch, useSelector} from 'react-redux';
import '../App.css'


import BookDetails from "./BookDetails"



function ShoppingCart(props) {
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]):1;
    const dispatch = useDispatch();
    
    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
    }
useEffect(() =>{
    if(productId) {
        dispatch(addToCart(productId,qty));
    }
}, [])
const checkoutHandler = () => {
    props.history.push("/signin?/Information");
}

   return <div className = "cart-text">
        <div className = "cart-list">
            <ul className = "cart-list-container">
                <h2 classname ="Cart-banner"r>Shopping Cart</h2>
                <li>
                {/* <p>ADDED TO CART: ProductID: {productId} Quantity: {qty} </p> */}
                {/* <div>
                    Price
                </div> */}
                </li>
                {
                   cartItems.length ===0 ? 
                    <div>
                       Your cart is currently empty
                        <h6 className = "cart-exit">Continue browsing<a href = "http://localhost:3000/" ><button className = "Atc-button">🏠</button> </a> </h6> 
                   </div>
                   :
                   cartItems.map( item =>
                    <li>
                    <div>
                        <img className = "Cart-img" src = {item.image} alt ="product-image" />
                        <div className = "Cart-name">
                            <div>
                                {item.name}
                            </div>
                            <div>
                                Qty:  
                                <select value={item.qty} onChange={(e) => dispatch(addToCart(productId, e.target.value))}>
                                    <option value = "1">1</option>
                                    <option value = "2">2</option>
                                    <option value = "3">3</option>
                                    <option value = "4">4</option>
                                </select>
                                <br></br>
                                <br></br>
                                <button type= "button" className ="remove" onClick= {() => removeFromCartHandler(item.product)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                        <div>
                           <h5 className = "Cart-Price"> Price: ${item.price}</h5> 
                        </div>
                    </div> 
                    </li>
                   )
                   }
            </ul>
        </div>
                   
        <div ></div>
        <h3 className = "Cart-total">
            Subtotal ( {cartItems.reduce((a,c) => a + c.qty, 0)} items)
            :
                $ {cartItems.reduce((a,c) => a + c.price * c.qty, 0)}
        </h3>
        <button onClick = {checkoutHandler} className = "Checkout" disabled= {cartItems.length === 0}>  
        Check Out
        </button>
        
    </div>
                   
}

export default ShoppingCart;
// class ShoppingCartClass extends Component{

    
//     constructor()
//     {
//         super();
//         this.state = {
//             books : []          // cart
//         }

//     }
//         componentDidMount()
//         {
//             fetch('/books')
//                 .then(res => res.json())
//                 .then(books => this.setState({books}, () => console.log('books fetched..', books)));
//         }

       
        
//     render(props)
//     {
//         return <div className = "Cart"> 
//     <h1 className = "Cart-header">Shopping Cart</h1>
//     <div className = "Products">
//     <table>
//         <tr>
//             <tr className = "headings"></tr>
//             <th>Product</th>
//             <th>Quantity</th>
//             <th>Price</th>
//         </tr>
    
//     </table>

//     <itemNum/>
   
  
//     </div>
    
    
        
//         </div>
        
//     }
// }

// export default ShoppingCartClass;


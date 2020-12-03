import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import './BookDetails';



class WishList extends Component{

     
     state = {
      _id : "",
      bookid : "",
      name : "",
      image : "",
      author : "",
      price : "",
      wishlists: [],
      updatedWISHLIST: []
    }
  
    
    componentDidMount = () => {
      this.getWishlist();
 };


    getWishlist = () => {
      axios.get('/wishlists')
        .then((current) => {
          const data = current.data;
          this.setState({ wishlists: data });
        });     
    };

    // postWishlist = () => {
    //   const data = 
    //   axios.post('/wishlists', data)
    //   .then((data) => {
    //               console.log(data);
    // })
    //    .catch((err) => {
    //               console.log(err);
    //    })
    //   }



    displayWishlist = (wishlists) => {
      return wishlists.map((wishlist, index) => 
     
       <div key={index}> 
          <img className= "product-image" src={wishlist.image} alt=""></img>
          
          <div className="product-name"> <Link to={'/product/'+[wishlist.bookid]}>{wishlist.name}</Link> </div>
          <div className="product-name">{wishlist.author}</div>
          <div className="product-price">{wishlist.price}</div> 
        </div>
  
    );
    };

   
    
   render(){

      return(
    
    <div className = "WishList">
        
        <div>{this.displayWishlist(this.state.wishlists)}</div>
       
  
        </div>
        )
      }
    }

 
export default WishList;

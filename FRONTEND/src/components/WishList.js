import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';


function WishList(){ // Runs if user has no boooks in wishlist

  return(
    <div className = "WishList"> 
    <h1 className = "WishList-header">WishList</h1>


    <h5>You have nothing in your wish list.</h5>
    <h6>Continue browsing<a href="">Homepage</a></h6>
        
    
    </div>
  )
}





export default WishList;

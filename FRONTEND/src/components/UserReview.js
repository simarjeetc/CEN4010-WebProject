import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';


function UserReview(){ 

  return(
    <div className = "Reviews"> 
    <h1 className = "Reviews-header">Reviews</h1>


    <h5>No reviews have been given.</h5>
    <h6>Continue browsing<a href="">Homepage</a></h6>
        
    
    </div>
  )
}





export default UserReview;
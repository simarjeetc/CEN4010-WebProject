import BookDetails from './BookDetails'
import React, { Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import axios from 'axios'



function genClick() {
  document.getElementById("Item").classList.toggle("show");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

export default genClick;
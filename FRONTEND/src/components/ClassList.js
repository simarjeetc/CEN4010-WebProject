import React, { Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import '../App';

class ClassList extends Component{

    constructor(){
        super();
    }



    render(){

        function genClick() {

            document.getElementById("Item").classList.toggle("show");
          }

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

        return <div class="dropdown">
        <button onClick={genClick} class="dropbtn">Genres</button>
            <div id="Item" class="dropdown-content">
                <div id="List">
                    <a class="genre" id="genre1"  href={"/Fantasy"}>Fantasy Fiction</a>
                    <a class="genre" id="genre2"  href={"/Science"}>Science Fiction</a>
                    <a class="genre" id="genre3"  href={"/Speculative"}>Speculative Fiction</a>
                </div>
            </div>
        </div>
    }





}

export default ClassList;
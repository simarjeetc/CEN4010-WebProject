import React, { Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import '../App';

class ClassList extends Component{

    constructor(){
        super();
    }



    render(){
      /*
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
        */

       var orderObject = {
        "Author": {
          "Name": ["Ascending", "Descending"],

        },
        "Date": {
          "Date Released": ["Acending", "Descending",],
              
        },
        "Genre": {
          "Fantasy Fiction": ["Acending", "Descending"],
          "Science Fiction": ["Acending", "Descending"],
          "Speculative Fiction": ["Acending", "Descending"]
              
        },
        "Book name": {
          "Name": ["Acending", "Descending"]
              
        },
        "Price": {
          "Price": ["Acending", "Descending"]
              
        }
      }
      window.onload = function() {
        var orderSel = document.getElementById("order");
        var valueSel = document.getElementById("value");
        var sortSel = document.getElementById("sort");
        for (var x in orderObject) {
          orderSel.options[orderSel.options.length] = new Option(x, x);
        }
        orderSel.onchange = function() {
          //display correct values
          for (var y in orderObject[this.value]) {
            valueSel.options[valueSel.options.length] = new Option(y, y);
          }
        }
        valueSel.onchange = function() {
          //display correct values
          var z = orderObject[orderSel.value][this.value];
          for (var i = 0; i < z.length; i++) {
            sortSel.options[sortSel.options.length] = new Option(z[i], z[i]);
          }
        }
      }

        function genClick() {

            document.getElementById("Item").classList.toggle("show");
          }

       
return <html>

  <button onClick={genClick} class="dropbtn">Order</button>
  <div id="Item" class="dropdown-content">
    <form name="form1" id="form1" action="/action_page.php">
      Order: <select name="order" id="order">
      <option value="" selected="selected">Select order</option>
      </select>
    <br></br>
      Value: <select name="value" id="value">
      <option value="" selected="selected">Please select order first</option>
      </select>
    <br></br>
    Sort: <select name="sort" id="sort">
      <option value="" selected="selected">Please select value first</option>
      </select>
    <br></br>
      <input type="submit" value="Submit"></input>  
    </form>
  </div>
</html>

    }





}

export default ClassList;
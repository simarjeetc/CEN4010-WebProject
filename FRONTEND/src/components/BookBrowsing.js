import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default class BookBrowsingTab extends Component {

  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
}


  async componentDidMount() {
    const url = "/books";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ books: data })
    console.log(this.state.books)
    console.log(this.state.books.length)
  }

  getData = (rowData) => {
    // This is the row data from ChildComponent
      console.log(rowData);
    }

  render() {
    

    var size = this.state.books.length;
    var books = this.state.books;

    function openMenu(n) {
      var drop = document.getElementsByClassName("dropdown");


      drop[n].classList.toggle("active");


      for (var x = 0; x < drop.length; x++) {
        if (!drop[x]) {
          drop[x].classList.toggle("active");
        }
      }
    }

    return <nav class="nav">	
      <ul class="menu-cnt">
        <li class="menu" id="author">
          Author
        </li>
        <li class="menu" id="date"  >
          Date
        </li>
        <li class="menu" id="genre" onClick={() => openMenu(0)}>
          Genre
          <ul class="dropdown" >
            <li>Fantasy Fiction</li>
            <li>Science Fiction</li>
            <li>Speculative Fiction</li>
          </ul>
        </li>
        <li class="menu" id="name" >
          Book Name
        </li>
        <li class="menu" id="price" >
          Price
        </li>
      </ul>
    </nav>
  }
}

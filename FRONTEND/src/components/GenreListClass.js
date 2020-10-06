import React, { Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import axios from 'axios'
import BookDetails from './BookDetails';
import Home from './Home'
import {BrowserRouter, Route} from 'react-router-dom'
import '../index.css'

class GenreListClass extends Component{

    
    constructor()
    {
        super();
        this.state = {
            books : []
        }

    }
        componentDidMount()
        {
            // making call to the backend 
            fetch('/books')
                .then(res => res.json())
                // setting the state when getting results
                .then(books => this.setState({books}, () => console.log('books fetched..', books)));
        }

    render()
    {
        var i = 0;
        var genres = ["Fantasy Fiction", "Science Fiction", "Speculative Fiction"];
        return <div className = "Genres">
               {this.state.books.map(book =>  
                <li> 
                
                
                <div className="Genre">
                <Link to={'/product/'+[book.bookid]}> 
                <img className= "product-image" src={book.image} alt=""/>
                </Link>

                <div className="product-name"> 
                    <Link to={'/product/'+[book.bookid]}>{book.name}</Link>
                    </div>
                <div className="product-author">{book.author}</div>
                <div className="product-price">{book.price}</div>
                <div className="product-genre">{book.genre}</div>
                    </div>
                </li>


                )}
                </div>    
    }
}

export default GenreListClass;
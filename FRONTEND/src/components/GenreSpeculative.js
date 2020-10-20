import React, { Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import '../App';

class GenreSpeculative extends Component{

    
    constructor()
    {
        super();
        this.state = {
            books : []
        }
    }
        componentDidMount()
        {
            fetch('/books')
                .then(res => res.json())
                .then(books => this.setState({books}, () => console.log('books fetched..', books)));
        }   

        

    render()
    {
        var specificGenre = [];
        
        for (let i = 0; i < this.state.books.length; i++) {
            if(("Speculative fiction" || "Speculative fiction") == this.state.books[i].genre){
                specificGenre[i] = this.state.books[i];
            }
        }    
        
        specificGenre.sort((a, b) => {
            let valueA = a.name[0].toLowerCase(),
                valueB = b.name[0].toLowerCase();
        
            if (valueA < valueB) {
                return -1;
            }
            if (valueA > valueB) {
                return 1;
            }
            return 0;
        });

            return <ul className="products"> 
            
                {specificGenre.map(book =>
                        <li> 
                    <div className="product">
                    <Link to={'/product/'+[book.bookid]}> 
                    <img className= "product-image" src={book.image} alt=""/>
                    </Link>
                    
                    <div className="product-name"> 
                        <Link to={'/product/'+[book.bookid]}>{book.name}</Link>
                        </div>
                    <div className="product-name">{book.author}</div>
                    <div className="product-price">{book.price}</div>
                    <div className="product-genre">{book.genre}</div>
                    <button className = "Atc-button">Add to Cart</button>
                    <button className = "Atc-button">Add to Wish List</button>
                        </div>
                        
                        
                        </li> 
                        
                    )}
            </ul> 
    }
}

export default GenreSpeculative;

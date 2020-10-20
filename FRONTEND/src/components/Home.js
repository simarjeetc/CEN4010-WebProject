import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import './ClassList'

class Home extends Component {

    constructor()
    {
        super();
        this.state = {

            // empty array of books
            books: []   
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


    render() {

        return <ul className="products"> 
        
            {this.state.books.map(book =>
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

                <a href = "http://localhost:3000/ShoppingCart"><button className = "Atc-button" >Add to Cart</button> </a>

                <a> <button className = "Wls-button" onclick="addtoWL()" >⭐</button> </a>
                

                <a href = "http://localhost:3000/WishList"><button className = "Atc-button">Add to WishList</button> </a>
               


                    </div>
                    
                    
                    </li> 
                    
                )}
        </ul> 
    }

}

export default Home;
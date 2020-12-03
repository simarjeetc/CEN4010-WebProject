import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './BookBrowsing'

class Home extends Component {

    constructor() {
        super();
        this.state = {

            // empty array of books
            books: []
        }
    }

    componentDidMount() {
        // making call to the backend 
        fetch('/books')
            .then(res => res.json())
            // setting the state when getting results
            .then(books => this.setState({ books }, () => console.log('books fetched..', books)));
    }


    render() {

        return <ul className="products">

            {this.state.books.map(book =>

                <li>
                    <div className="product">
                        <Link to={'/product/' + [book.bookid]}>
                            <img className="product-image" src={book.image} alt="" />
                        </Link>

                        <div className="product-name">
                            <Link to={'/product/' + [book.bookid]}>{book.name}</Link>
                        </div>
                        <div className="product-name">{book.author}</div>
                        <div className="product-price">{book.price}</div>



                    </div>


                </li>

            )}
        </ul>
    }

}

export default Home;

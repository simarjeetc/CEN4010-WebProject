import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import BookDetails from './components/BookDetails'

import GenreFantasy from './components/GenreFantasy';
import GenreScience from './components/GenreScience';
import GenreSpeculative from './components/GenreSpeculative';



import ShoppingCart from './components/ShoppingCart'
import WishList from './components/WishList'
import UserReview from './components/UserReview'
import ClassList from './components/ClassList';

function App() {
  return (
    <BrowserRouter> 

    <div className="grid-container">
    <header className="header">
        <div className="brand">
            <a class = "Title " href="/">Geek Text</a>
        </div>
        <Route path ="/" exact={true} component={ClassList}/>
        <div className="header-links"> 
        <Route path="/ShoppingCart/" component={ShoppingCart}/>
                <a href="ShoppingCart">Cart 🛒</a>

        <Route path="/WishList/" component={WishList}/>
                <a href="WishList">Wish List ⭐</a>

        <Route path="/UserReview/" component={UserReview}/>
                <a href="UserReview">Reviews 📝</a>        
                
        <a href="signin">Sign in</a>
    </div>
    </header>

    <aside>
        Shopping Categories 
    </aside>

    <main className="main">
        <div className="content">
        <Route path="/product/:bookid" component={BookDetails}/>
        
        <Route path="/" exact={true} component={Home} />
        <Route path ="/Fantasy" component={GenreFantasy}/>
        <Route path ="/Science" component={GenreScience}/>
        <Route path ="/Speculative" component={GenreSpeculative}/>
        </div>
        

    </main>

    <footer className="footer">
        Copyright © 2020 
    </footer>

</div>
</BrowserRouter>
  );
}

export default App;

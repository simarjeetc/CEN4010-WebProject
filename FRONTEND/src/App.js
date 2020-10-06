import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import BookDetails from './components/BookDetails'

import GenreListClass from './components/GenreListClass';
import genClick from './components/GenreList';



=======
import ShoppingCart from './components/ShoppingCart'
import WishList from './components/WishList'
import UserReview from './components/UserReview'


function App() {
  return (
    <BrowserRouter> 

    <div className="grid-container">
    <header className="header">
        <div className="brand">
            <a class = "Title " href="index.html">Geek Text</a>
        </div>
        <div class="dropdown">
        <button onClick={genClick} class="dropbtn">Genres</button>
        <div id="Item" class="dropdown-content">
                <div>
                    <a className="genreItem1" onClick="test" href={"/genreList"}>Fantasy Fiction</a>
                    <a className="genreItem2" href={"/genreList"}>Science Fiction</a>
                    <a className="genreItem3" href={"/genreList"}>Speculative Fiction</a>
                </div>
            </div>
        </div>
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
        <Route path ="/genreList" component={GenreListClass}/>
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

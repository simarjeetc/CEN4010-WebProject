import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import BookDetails from './components/BookDetails'
import GenreListClass from './components/GenreListClass';
import genClick from './components/GenreList';




function App() {
  return (
    <BrowserRouter> 

    <div className="grid-container">
    <header className="header">
        <div className="brand">
            <a href="index.html">ThinkGeek</a>
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
        <a href="cart.html">Cart</a>
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
        Copyright 2020
    </footer>

</div>
</BrowserRouter>
  );
}

export default App;

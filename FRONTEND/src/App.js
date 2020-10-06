import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import BookDetails from './components/BookDetails'
import ShoppingCart from './components/ShoppingCart'


function App() {
  return (
    <BrowserRouter> 

    <div className="grid-container">
    <header className="header">
        <div className="brand">
            <a class = "Title " href="index.html">Geek Text</a>
        </div>
        <div className="header-links"> 
        <Route path="/ShoppingCart/" component={ShoppingCart}/>
                <a href="ShoppingCart">Cart 🛒</a>
                
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

import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import BookDetails from './components/BookDetails'


function App() {
  return (
    <BrowserRouter> 

    <div className="grid-container">
    <header className="header">
        <div className="brand">
            <a href="index.html">ThinkGeek</a>
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

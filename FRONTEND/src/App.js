import React, { useState, useEffect, useContext } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import BookDetails from './components/BookDetails'
import ShoppingCart from './components/ShoppingCart'
import WishList from './components/WishList'
import UserReview from './components/UserReview'
import BookBrowsingTab from './components/BookBrowsing';
import Register from './Profile/Register';
import Login from './Profile/Login';
import Profile from './Profile/Profile';
import Axios from "axios";
import UserContext from "./Profile/userContext";
import AuthOptions from "./Profile/AuthOptions";

function App() {

    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined,
    });

    useEffect(() => {
        const checkLoggedIn = async () => {
          let token = localStorage.getItem("auth-token");
          if (token === null) {
            localStorage.setItem("auth-token", "");
            token = "";
          }
          const tokenRes = await Axios.post(
            "http://localhost:5000/users/tokenIsValid",
            null,
            { headers: { "x-auth-token": token } }
          );
          if (tokenRes.data) {
            const userRes = await Axios.get("http://localhost:5000/users/", {
              headers: { "x-auth-token": token },
            });
            setUserData({
              token,
              user: userRes.data,
            });
          }
        };

        checkLoggedIn();
      }, []);

      const logout = () => {
        setUserData({
          token: undefined,
          user: undefined,
        });
        localStorage.setItem("auth-token", "");
      };

  return (
    <BrowserRouter> 

  <UserContext.Provider value={{ userData, setUserData }}>

    <div className="grid-container">
    <header className="header">
        <div className="brand">
            <a class = "Title " href="/">Geek Text</a>
        </div>
        <Route path ="/" component={BookBrowsingTab}/>
        <div className="header-links"> 

<Route path="/ShoppingCart/:id?" component={ShoppingCart}/>
<a class = "cart-btn"href="ShoppingCart">Cart 🛒</a>
<div class = "cart-items">{}</div>

        <Route path="/WishList/" component={WishList}/>
                <a href="WishList">Wish List ⭐</a>

        <Route path="/UserReview/" component={UserReview}/>
                <a href="UserReview">Reviews 📝</a>        
                
                <Route path="/Register/" component={Register}/>

<Route path="/users/" component={Profile}/>
        <a href="users">Profile </a> 


<Route path="/Login/" component={Login}/>
<button onClick={logout}>Log out</button>    </div>
<div className="page">
          {userData.user ? (
            <h4>Welcome {userData.user.displayName}</h4>
          ) : (
            <>
              <h5>You are not logged in</h5>
              <aside><AuthOptions /> </aside>
            </>
          )}
        </div>
    </header>
    
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
</UserContext.Provider>
</BrowserRouter>

  );
}

export default App;

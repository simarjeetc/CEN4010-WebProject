import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "./userContext";
import Axios from "axios";
import ErrorNotice from "./ErrorNotice";

//tried to make a big webpage to edit profile data, WIP

export default function Profile() {
  const [homeAddress, setHomeAddress] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [shippingAddress, setShippingAddress] = useState();
  const [creditCard, setCreditCard] = useState();

  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

 const submit = async (e) => {
    e.preventDefault();

    try {
      const updateUser = { shippingAddress, creditCard };
      await Axios.post("http://localhost:5000/users/", updateUser);
      history.push("/users");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  
/*const submit = async (e) => {
  e.preventDefault();

  try {
    const newUser = { email, password, homeAddress, shippingAddress, creditCard };
    await Axios.post("http://localhost:5000/users/", newUser);
    const loginRes = await Axios.post("http://localhost:5000/users/Login", {
      email,
      password,
    });
    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user,
    });
    localStorage.setItem("auth-token", loginRes.data.token);
    history.push("/");
  } catch (err) {
    err.response.data.msg && setError(err.response.data.msg);
  }
};*/
 

/*
componentDidMount()
{
    // making call to the backend 
    fetch('/users')
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
           

                </div>
                
                
                </li> 
                
            )};
    </ul> 
}

*/
  return (
    <div className="page">
      
      <h2>Update User</h2>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form className="form" onSubmit={submit}>
        <label htmlFor="register-home-address">Home Address</label>
        <input
          id="register-home-address"
          type="text"
          placeholder="Home Address"
          onChange={(e) => setHomeAddress(e.target.value)}
        />
        <label htmlFor="register-shipping-address">Shipping Address</label>
        <input
          id="register-shipping-address"
          type="text"
          placeholder="Shipping Address"
          onChange={(e) => setShippingAddress(e.target.value)}
        />
        <label htmlFor="register-credit-card">Credit Card</label>
        <input
          id="register-credit-card"
          type="text"
          placeholder="Credit Card"
          onChange={(e) => setCreditCard(e.target.value)}
        />
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Update" />
        
      </form>

      
    </div>

  );
}

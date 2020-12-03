import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "./userContext";
import Axios from "axios";
import ErrorNotice from "./ErrorNotice";
import "./css/Register.css"
import {Link} from 'react-router-dom';


export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [homeAddress, setHomeAddress] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = { email, password, passwordCheck, displayName, homeAddress };
      await Axios.post("http://localhost:5000/users/Register", newUser);
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
  };

  return (
    <div className="page">
      <h2>Register</h2>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form className="form" onSubmit={ <Link to={'http://localhost:3000/'}></Link>}>
        <label htmlFor="register-email">Email</label>
        <input
          id="register-email"
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="register-password">Password</label>
        <input
          id="register-password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Verify password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />

        <label htmlFor="register-display-name">Nickname</label>
        <input
          id="register-display-name"
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
        />

        <label htmlFor="register-home-address">Home Address</label>
        <input
          id="register-home-address"
          type="text"
          onChange={(e) => setHomeAddress(e.target.value)}
        />

        <input type="submit" value="Register" />
        
      </form>

      
    </div>
  );
}

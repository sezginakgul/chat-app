import React from "react";
import Add from "../images/addAvatar.png";

const Login = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">Chat</span>
        <span className="title">Login</span>
        <form action="" className="form">
          <input type="email" name="" id="" placeholder="Email" />
          <input type="password" name="" id="" placeholder="Password" />
          <button className="sign-button">Sign in</button>
        </form>
        <p className="question">You don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;

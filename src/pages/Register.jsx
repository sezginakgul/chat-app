import React from "react";

const Register = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">Chat</span>
        <span className="title">Register</span>
        <form action="" className="form">
          <input type="text" name="" id="" placeholder="Display Name" />
          <input type="email" name="" id="" placeholder="Email" />
          <input type="password" name="" id="" placeholder="Password" />
          <input type="file" id="file" />
          <button className="sign-button">Sign Up</button>
        </form>
        <p className="question">Do you have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;

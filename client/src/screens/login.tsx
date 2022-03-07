import React from 'react';
import "../styles/login.css";

const login=({updateLogged})  => {
  return (
    <div className="title">
    <div className="container">
    <div className="child">
      <h1> Login to continue</h1>
      <br></br>
      <a className="button" href="/home" onClick={updateLogged(true)}> Login </a>
    </div>
    </div>
    </div>
  )
};

export default login
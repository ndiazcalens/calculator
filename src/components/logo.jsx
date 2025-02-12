import React from "react";
import "../stylesheets/logo.css";
import calculator from "../images/calculator.png"

function Logo(){
  return (
    <div className='logo-calc-container'>
      <img className='calc-logo'
        src={calculator}
        alt="Calculator logo"
    />
    </div>
  );
};


export default Logo;
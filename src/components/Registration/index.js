import React from "react";
import "./index.scss";

export default function Registarion(){
  return(
    <div className="registration">
      <div className="heading">Register your Skill with our Database Community</div>
      <div className="form">
        <div className="left">
          <input className="register-input" type="text" placeholder="Product Name"/>
          <input className="register-input" type="text" placeholder="Voice Platform"/>
          <input className="register-input" type="text" placeholder="Category"/>
          <input className="register-input" type="text" placeholder="Website / Download Link"/>
        </div>
        <div className="right">
          <textarea className="register-input textbox" type="text" placeholder="Short 140 character description"></textarea>
          <input className="register-input" type="text" placeholder="Search Keywords"/>
        </div>
        <div className="div-register">
          <button className="btn-register">REGISTER YOUR SKILL</button>
        </div>
      </div>
    </div>
  );
}
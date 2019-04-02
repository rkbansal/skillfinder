import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalComp from "../Modal";
import "./index.scss";
export default function Nav(props) {
  const [loginVisible, setVisible] = useState(false);

  function showModal(){
    setVisible(true);
  }

  function handleOk(e){
    setVisible(false);
  }

  function handleCancel(e){
    setVisible(false);
  }

  function handleClick(event, e) {
    if(e == "LOGIN/SINGUP"){
      showModal();
    }
  }

  const links = ["SDK", "REGISTER YOUR SKILL", "LOGIN/SINGUP"];
  return (
    <div className="nav">
      <div className="left">SKILLFINDER</div>
      <div className="right">
        <div>
          <Link to="/sdk">
            SDK
          </Link>
        </div>
          <div onClick={(event)=>handleClick(event, "register")}>REGISTER YOUR SKILL</div>
          <div onClick={(event)=>handleClick(event, "sLOGIN/SINGUPdk")}>LOGIN/SINGUP</div>
      </div>
      <ModalComp
        visible={loginVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  )
}
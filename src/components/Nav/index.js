import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import ModalComp from "../Modal";
import "./index.scss";
export default function Nav(props) {
  const [loginVisible, setVisible] = useState(false);
  const [isCollapse, setCollapse] = useState(false);
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

  function toggleMenus() {
    setCollapse(!isCollapse);
  }

  const links = ["SDK", "REGISTER YOUR SKILL", "LOGIN/SINGUP"];
  return (
    <div className="nav">
      <div className="left">
        <Link className="logo_link" to="/">SKILLFINDER</Link>
        <span className="left_right">
          <a href="javascript:void(0);" className="bar_icon" onClick={toggleMenus}>
            <Icon type="bars" />
          </a>
        </span>
      </div>
      <div className={`right ${!isCollapse? "hide":"show"}`}>
        <div className="nav-link">
          <Link to="/sdk">
            SDK
          </Link>
        </div>
          <div className="nav-link" onClick={(event)=>handleClick(event, "register")}>REGISTER YOUR SKILL</div>
          <div className="nav-link" onClick={(event)=>handleClick(event, "LOGIN/SINGUP")}>LOGIN/SINGUP</div>
      </div>
      <ModalComp
        visible={loginVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  )
}
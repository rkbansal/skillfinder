import React, { useState } from 'react';
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
        {links.map((e, i)=>{
          return <div key={i} onClick={(event)=>handleClick(event, e)}>{e}</div>
        })}
      </div>
      <ModalComp
        visible={loginVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  )
}
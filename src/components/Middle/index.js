import React, { useState } from 'react';
import MiddleLeft from "../MiddleLeft";
import Registarion from "../Registration";
import "./index.scss";

export default function Middle(props) {
  return (
    <div className="middle">
      <MiddleLeft />
      <Registarion />
    </div>
  )
}
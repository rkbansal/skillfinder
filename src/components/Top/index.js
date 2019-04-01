import React from 'react';
import Nav from '../Nav';
import Banner from "../Banner";
import Search from "../Search";
import "./index.scss";

export default function Top(props) {
  return (
    <div className="top">
      <Nav />
      <Banner />
      <Search />
    </div>
  )
}
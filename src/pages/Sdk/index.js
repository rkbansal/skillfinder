import React, { Component } from 'react';
import Nav from "../../components/Nav";
import SdkLeftPanel from "../../components/SdkLeftPanel";
import SdkRightPanel from "../../components/SdkRightPanel";
import Footer from '../../components/Footer';
import "./index.scss";

class Sdk extends Component {
  render() {
    return (
      <div className="sdk">
        <div className="nav-heading">
          <Nav />
        </div>
        <div className="sdk-middle">
          <SdkLeftPanel />
          <SdkRightPanel />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Sdk;
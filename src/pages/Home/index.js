import React, { Component } from 'react';
import Top from '../../components/Top';
import Middle from '../../components/Middle';
import Footer from '../../components/Footer';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Top />
        <Middle />
        <Footer />
      </div>
    );
  }
}

export default Home;
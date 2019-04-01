import React, { Component } from 'react';
import Nav from './components/Nav';
import Top from './components/Top';
import Middle from './components/Middle';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
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

export default App;

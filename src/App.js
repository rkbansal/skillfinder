import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Top from './components/Top';
import Middle from './components/Middle';
import Footer from './components/Footer';
import Home from './pages/Home';
import SDK from './pages/Sdk';
import SearchResult from './pages/SearchResult';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <Router>
                <Route path="/" exact component={Home} />
                <Route path="/sdk/" component={SDK} />
                <Route path="/search/" component={SearchResult} />
            </Router>
      </div>
    );
  }
}

export default App;

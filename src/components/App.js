import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar.js';
import Ourstory from './our-story.js';


class App extends Component{
  render(){
    return(
      <div className="container">
        <div className="Nav">
          <Navbar />
        </div>

        <div className="About">
          <Ourstory />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar.js';
import Ourstory from './our-story.js';
import Locator from './locator.js';
import Cookiemenu from './cookie-menu.js';
import Actionbar from './action-bar.js';
import Footer from './footer.js';
import Instagram from './instagram.js';


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

        <div className="Cookie-Locator">
          <Locator />
        </div>

        <div className="Cookie-Menu">
          <Cookiemenu />
        </div>

        <div className="Action-Bar">
        <Actionbar />
        </div>
        
        <div className="Footer">
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import './App.css';
import Navbar from './navbar.js';
import Ourstory from './our-story.js';
import Locator from './locator.js';
import {Menu} from './menu.js';
import Catering from './catering.js';
import Footer from './footer.js';


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="Nav">
          <Navbar/>
        </div>

        <div className="About">
          <Ourstory/>
        </div>

        <div className="Find us">
          <Locator/>
        </div>

        <div className="Menu">
          <Menu/>
        </div>

        <div className="Catering">
          <Catering/>
        </div>

        <div className="Footer">
          <Footer/>
        </div>

      </div>
    );
  }
}

export default App;

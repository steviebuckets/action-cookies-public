import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './navbar.js';
import Ourstory from './our-story.js';
import Locator from './locator.js';
import Menu from './menu.js';
// import Actionbar from './action-bar.js';
// import Footer from './footer.js';
// import Instagram from './instagram.js';
// import MapContainer from './map.js'


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

        <div className="Find us">
          <Locator />
        </div>

        <div className="Menu">
          <Menu />
        </div>

      </div>
    );
  }
}

export default App;


//
// <div className="Cookie-Locator">
//   <Locator />
// </div>
//
// <div className="Cookie-Menu">
//   <Cookiemenu />
// </div>
//
// <div className="Action-Bar">
// <Actionbar />
// </div>
//
// <div className="Footer">
// <Footer />
// </div>

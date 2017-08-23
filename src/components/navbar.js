import React from 'react';

export default function Navbar(){
  const name = 'Action Cookies';
  return(
    // <div className="navbar">
    // <div className="navbar-name">{name}</div>
    // </div>
    <div className="inner-cover">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>

              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                  <li><a href="#about-section">Our Story</a></li>
                  <li><a href="#cookie-locator">Cookie Locator</a></li>
                  <li><a href="#cookie-menu">Cookie Menu</a></li>
                  <li><a href="#action-bar">Action Bar</a></li>
                  <li><a href="#contact-footer">Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="images">
            <img src={require("./images/action-logo.png")} className="image" />
            </div>

        </div>
  )
}

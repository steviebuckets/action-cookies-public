import React from 'react';

export default function Catering() {
  return (

    <div className="action-bar-container" id="catering">
        <div className="container-fluid" id="cookie-locator"></div>

        <div className="row">
          <div className="col-md-12">
          <div className="catering-info">
          <h1>Catering</h1>
          </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
          <ul>
          <li><p>Mini cookies and Regular cookies.</p></li>
          <li><p>Custom Labled Cookie Favors.</p></li>
          <li><p>Custom Cakes.</p></li>
          </ul>
          <span>Contact us for more information - actioncookies@gmail.com</span>
          </div>
        <div className="col-md-6">
          <div className="catering-image">
            <img src={require("./images/catering-cakes.jpeg")}/>
          </div>
        </div>

        </div>
    </div>
  )
}

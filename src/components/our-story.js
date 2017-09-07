import React from 'react';
import Instagram from './instagram.js';

export default function Ourstory() {
  return (
    <div className="container" id="about-section">
      <div className="row" id="about">
        <div className="col-md-12">
          <h1>What is an Action Cookie?</h1>
          <p style={{
            color: "#616161"
          }}>[ak-shuh n] [koo k-ee], ​ˈækʃ(ə)n ˈkʊki</p>
          <p style={{
            color: "#616161"
          }} className="noun">noun</p>
          <p className="defined">* An all natural baked good made by the Los Angeles based cookie company, ACTION COOKIES.</p>
          <p className="defined">* A person who takes massive action toward their goals or dreams with love and passion.</p>
        </div>

      </div>

      <div className="instagram">
        <p>Keep up with the Action on Instagram</p>
        <p className="insta-handle">@actioncookies</p>
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="insta-grid">
            <Instagram/>
          </div>
        </div>
      </div>

    </div>

  )
}

import React from 'react';


/* Note Our Story component will import Instagram API component for images */

export default function Ourstory() {
  return (
    <div className="container">
      <div className="about" id="about-section">
        <div className="about-text">
          <h1>Our Story</h1>
          <p className="p1">
            <span>ACTION COOKIES </span>
            is a Los Angeles based cookie company that specializes in cookies and bars made with all natural ingredients.</p>

          <p className="quote">"Whatever you're doing (applies to us at Action Cookies), make sure you're doing it with Love and passion." -Ebbie Echeverri</p>
        </div>
        <p>Keep up with the Action on Instagram</p>
        <p>@actioncookies</p>
        <img src={require('./images/insta.png')} className="insta" />
      </div>
    </div>
  )
}

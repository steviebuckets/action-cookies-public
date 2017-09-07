import React from 'react';

export default function Footer() {
  return (
    <div className="mastfoot" id="contact-footer">
    <div className="outer">
      <p>Welcome to the ACTION!
        <br/>We are so happy to hear from our customers and we love to get orders too!</p>
    </div>
      <div className="inner">
        <h1>Contact</h1>
        <p>actioncookies@gmail.com</p>
        <a href="https://twitter.com/actioncookies?lang=en">
          <i className="fa fa-twitter-square fa-lg" aria-hidden="true"></i>
        </a>
        <a href="https://www.facebook.com/actioncookies">
          <i className="fa fa-facebook-square fa-lg" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/actioncookies/">
          <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  )
}

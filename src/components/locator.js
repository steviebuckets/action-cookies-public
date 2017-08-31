import React from 'react';
// import MapContainer from './map.js'

/* Note Cookie Locator component will import Google Maps API component for Map */
/* Possibly crearte another compoenet for Form and import here? */

export default function Locator() {
  return (
    <div className="locations" id="location">
    <div className="container-fluid" id="cookie-locator">
    </div>
    <div className="header">
    <h1>Find us</h1>
    </div>
    <div className="row" id="search">
      <div className="col-md-4">
        <ul>
          <a href="">Barbara's at the Brewery</a><br/>
          <a href="https://www.google.com/maps?v=2&f=q&ie=UTF8&t=m&iwloc&q=Copa+Vida,+70+S+Raymond+Ave,+Pasadena,+California+91105,+United+States&z=14&source=embed">Copa Vida</a><br/>
          <a href="">Chimney Coffee House</a><br/>
          <a href="">Caffe Vita</a><br/>
          <a href="">KAFN</a>
        </ul>
      </div>
      <div className="col-md-4">
        <ul>
         <a href="">Kaldi Coffee</a><br/>
         <a href="">Bru CoffeeBar</a><br/>
         <a href="">Naturewell</a><br/>
         <a href="">Andante Coffee</a><br/>
         <a href="">Tomatoe Pie Silverlake</a>
        </ul>
      </div>
      <div className="col-md-4">
        <ul>
        <a href="">Tomatoe Pie South Pasadena</a><br/>
        <a href="">The Green Bean</a><br/>
        <a href="">Ground Zero Performance Cafe</a><br/>
        <a href="">Pillars Cafe</a><br/>
        <a href="https://www.google.com/maps/place/Howlin'+Ray's/@34.0612681,-118.2413455,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c65af5e138b1:0x6b3390b8e0d01d0!8m2!3d34.0612681!4d-118.2391568">Howlin Ray's</a><br/>
        </ul>
      </div>
    </div>
    </div>
  )
}

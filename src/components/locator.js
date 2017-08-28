import React from 'react';
import MapContainer from './map.js'

/* Note Cookie Locator component will import Google Maps API component for Map */
/* Possibly crearte another compoenet for Form and import here? */

export default function Locator() {
  return (
    <div className="container-fluid" id="cookie-locator">
      <h1>Cookie Locator</h1>
      <div className="google-map">
      <MapContainer />
      </div>
      <div className="row" id="search">



        <div className="col-sm-6">
          <ul>
            <a href="">Barbara's at the Brewery<br/>620 Moulton Av #110<br/>Los Angeles CA 90031</a>
            <a href="">Copa Vida<br/>70 S Raymond Ave<br/>Pasadena CA 91105</a>
            <a href="">Chimney Coffee House<br/>1100 N. Main St. STE B<br/>Los Angeles CA 90012</a>
            <a href="">Caffe Vita<br/>4459 W Sunset Boulevard<br/>Los Angeles CA 90027</a>
            <a href="">KAFN<br/>1019 E Palmer Ave<br/>Glendale CA 91205</a>
            <a href="">Kaldi Coffee<br/>3147 Glendale Blvd<br/>Los Anegles 90039</a>
          </ul>
        </div>
      </div>
    </div>
  )
}


// <div className="col-sm-6">
//   <div className="zip-search">
//     <form>
//       <input type="text" className="info" placeholder="City or Zip"/>
//     </form>
//
//   </div>
// </div>

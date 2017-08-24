import React from 'react';

export default function Cookiemenu(){
  return(
    <div className="cookie-menu-container" id="cookie-menu">
          <div className="row" id="cookie-row">
            <div className="col-md-4">
          <p>Chocolate Chip, the original Action Cookie that started it all! Made with all natural butter and sugar with a chocolate chip in every bite!</p>
          </div>
          <div className="col-md-4">
          <p>Our Snickerdoodle cookies are made with all natural butter and oil and organic eggs. Each cookie is rolled in our secret cinnamon sugar mixture!</p>
          </div>
          <div className="col-md-4">
          <p>Slightly crispy edges and a chewy center our the secret to our Molasses cookies. Perfect for dipping and guranteed to remind you of grandma.</p>
          </div>
          </div>
          <div className="row" id="cookies">
            <div className="col-md-4">
              <h1>Chocolate Chip</h1>
            <div className="container">
          <img src={require("./images/chocolate-chip.jpeg")} />
            </div>
              </div>
            <div className="col-md-4">
              <h1>Snickerdoodle</h1>
              <div className="container">
              <img src={require("./images/snickerdoodle.jpeg")} />
              </div>
            </div>
            <div className="col-md-4">
              <h1>Molasses</h1>
              <div className="container">
              <img src={require("./images/chocolate-chip.jpeg")} />
              </div>
            </div>
          </div>
        </div>
  )
}

import React from 'react';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    // this.onMouseEnter = this.onMouseEnter.bind(this);
  }
  onMouseOver(event) {
    event.target.style.visibility = 'hidden';

  }
  // onMouseEnter(event){
  //   event.target.style.visibility='visible';
  // }

  onMouseLeave(event) {
    event.target.style.visibility = 'visible';
  }

  render() {
    // const divStyle={
    //   display: 'none'
    // };
    return (

      <div className="menu" id="menu">

        <div className="container-fluid" id="cookie-locator"></div>

        <div className="row">
          <div className="col-md-4">
            <h1>Chocolate Chip</h1>
            <img src={require("./images/chocolate-chip.jpeg")} alt=""/>
          </div>

          <div className="col-md-4">
            <h1>Snickerdoodle</h1>
            <img src={require("./images/snickerdoodle.jpeg")} alt=""/>
          </div>

          <div className="col-md-4">
            <h1>Molasses</h1>
            <img src={require("./images/molas.jpeg")} alt=""/>
          </div>

          <div className="col-md-4">
            <h1>Peanut Butter</h1>
            <img src={require("./images/pb.jpeg")} alt=""/>
          </div>

          <div className="col-md-4">
            <h1>Oatmeal</h1>
            <img src={require("./images/oat.jpeg")} alt=""/>
          </div>

          <div className="col-md-4">
            <h1>Multipack</h1>
            <img src={require("./images/mp.jpeg")} alt=""/>
          </div>

        </div>

      </div>
    )
  }
}

//Images for Bars, coming Soon when provided updated Images
// <div className="col-md-4" id='cranberry'>
//   <h1>*Cranberry Nut</h1>
//   <div className='visible'><img src={require("./images/cranberry.jpeg")} alt=""/></div>
//   <div className="off"><img src={require("./images/ingredients.png")} alt=""/></div>
// </div>
//
// <div className="col-md-4">
//   <h1>Zucchini Choc Chip</h1>
//     <div id="on-zuch"><img src={require("./images/zuch.jpeg")} alt=""/></div>
//     <div className="off"><img src={require("./images/ingredients.png")} alt=""/></div>
// </div>
//
// <div className="col-md-4">
//   <h1>*Pumpkin Nut</h1>
//     <div id="on-pumpkin"><img src={require("./images/pumpkin.jpeg")} alt=""/></div>
//     <div className="off"><img src={require("./images/ingredients.png")} alt=""/></div>
// </div>
//
// <div className="col-md-4">
//   <h1>Berry Power</h1>
//     <div id="on-berry-power"><img src={require("./images/berry-power.jpeg")} alt=""/></div>
//     <div className="off"><img src={require("./images/ingredients.png")} alt=""/></div>
// </div>
//
// <div className="col-md-4">
//   <h1>Coming Soon!</h1>
//   <p>Neanderballz</p>
//   <p>Peanut Butter Cup</p>
// </div>
//
// <div className="col-md-4">
//   <h1>* Seasonal items</h1>
// </div>

//Mouseover for hiding and displaying ingredients for Bars (coming soon with updated images)
// onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}

// <div className="row" id="cookie-row">
//   <div className="col-md-4">
// <p>Chocolate Chip, the original Action Cookie that started it all! Made with all natural butter and sugar with a chocolate chip in every bite!</p>
// </div>
// <div className="col-md-4">
// <p>Our Snickerdoodle cookies are made with all natural butter and oil and organic eggs. Each cookie is rolled in our secret cinnamon sugar mixture!</p>
// </div>
// <div className="col-md-4">
// <p>Slightly crispy edges and a chewy center our the secret to our Molasses cookies. Perfect for dipping and guranteed to remind you of grandma.</p>
// </div>
// </div>

// <div className="row" id="cookies">
//   <div className="col-md-4">
//     <h1>Chocolate Chip</h1>
//   <div className="container">
// <img src={require("./images/chocolate-chip.jpeg")} />
//   </div>
//     </div>
//   <div className="col-md-4">
//     <h1>Snickerdoodle</h1>
//     <div className="container">
//     <img src={require("./images/snickerdoodle.jpeg")} />
//     </div>
//   </div>
//   <div className="col-md-4">
//     <h1>Molasses</h1>
//     <div className="container">
//     <img src={require("./images/chocolate-chip.jpeg")} />
//     </div>
//   </div>
// </div>

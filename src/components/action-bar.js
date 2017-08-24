import React from 'react';

export default function Actionbar() {
  return (

    <div className="action-bar-container" id="action-bar">
      <div className="row" id="action-row">
        <div className="col-md-4">
          <p>ActionBar is Your morning oatmeal plus so many nutritious and delicious real foods grown right here in America, ready to grab and go!</p>
        </div>
        <div className="col-md-4">
          <p>Made with gluten free oats, legumes, fresh fruits, nuts, and local vegetables, these energy ingredients will keep you moving!
          </p>
        </div>
        <div className="col-md-4">
          <p>* Nutritional Info for all of the menu items coming soon.</p>
        </div>
      </div>
      <div className="row" id="bars">
        <div className="col-md-4">
          <h1>Summer Berry</h1>
          <div className="container">
            <div className="visible"><img src={require("./images/summer-berry.jpeg")}/></div>
            <div className="hiddens"><img src={require("./images/ingredients.png")}/></div>
          </div>
        </div>
        <div className="col-md-4">
          <h1>Zucchini Choc-Chip with Cacao Nibs</h1>
          <div className="container">
            <div className="visible"><img src={require("./images/choco-chip.jpeg")}/></div>
            <div className="hiddens"><img src={require("./images/ingredients.png")}/></div>
          </div>
        </div>
        <div className="col-md-4">
          <h1>Cranberry Nut</h1>
          <div className="container">
            <div className="visible"><img src={require("./images/summer-berry.jpeg")}/></div>
            <div className="hiddens"><img src={require("./images/ingredients.png")}/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

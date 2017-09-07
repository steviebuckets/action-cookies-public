import React from 'react';
// const instafeedTarget = 'instafeed';

export default class Instagram extends React.Component {
  render() {
    return (
      <div className="insta-container">
        <iframe title="title" src="//lightwidget.com/widgets/1c1e842401965a598386f8656515ea35.html" scrolling="no" allowTransparency="true" className="lightwidget-widget" style={{
          width: "100%",
          border: "0",
          opacity: "0.8",
          overflow: "hidden"
        }}></iframe>

      </div>
    )
  }
}

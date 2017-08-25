import React from 'react';
const instafeedTarget = 'instafeed';

export default class Instagram extends React.Component{
  render() {
    return(
    <div>
    <iframe src="//lightwidget.com/widgets/12d056a84dd25f9983cb6401edb87b30.html" scrolling="no"
    allowtransparency="true" class="lightwidget-widget" style={{
       width: "45%",
       border: "0",
       opacity: "0.8",
      overflow: "hidden"
      }}> </iframe>
    </div>
  )
  }
}

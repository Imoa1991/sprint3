import React from 'react';
class Main extends React.Component {
  render(){
    return (
      <div className = "mainContainer" >
        <p className = "paragraph">{this.props.text}</p>
      </div>
    )
  }
}
export default Main;

import React from 'react';
class Header extends React.Component {
  render(){
    return (
      <div className = "header" >
      <img src = {this.props.image} alt = "image" className = "image" / >
      <div className="headerContainer">
      <h1 className = "title" > {this.props.nosotras} < /h1>
      <p className = "date" > {this.props.date} < /p>
      </div>
      </div>
    )
  }
}
export default Header;

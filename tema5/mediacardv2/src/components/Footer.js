import React from 'react';
class Footer extends React.Component {
  render(){
    let classHeart = "far fa-heart icon";
    if (this.props.heart === true) {
      classHeart = "fas fa-heart icon";
    }
    return (
      <div className = "footer" >
        <p className = "read" > leer mas... < /p>
        <p className = "number"> {this.props.number}
          <i className = {classHeart}> < /i>
        < /p>
      </div>
    )
  }
}
export default Footer;

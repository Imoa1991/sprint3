import React from 'react';
import sheepPhoto from '../images/sheepPhoto.jpeg';

class SheepCounter extends React.Component {
  constructor(props) {
    super(props)
    this.countSheep = this.countSheep.bind(this)
    this.state = {
      count: 0
    }
  }
  countSheep = () => {
    let countNumber = this.state.count;
    countNumber += 1;
    this.setState({
        count: countNumber
    })
  }
  createArraySheeps = () => {
    const arraySheeps =[];
    for (let sheep = 0; sheep < this.state.count; sheep++) {
      arraySheeps.push (
        <li className = 'sheep'>
          <img src={sheepPhoto} alt="Oveja" className="photoSheep"/>
        </li>
      )
    }
    return arraySheeps;
  }
  render() {
      return (
      <div className='sheeps'>
        <h1 className='number'>{this.state.count}</h1>
        <button className='button' onClick={this.countSheep}>Contar Ovejas</button>
        <ul>{this.createArraySheeps()}</ul>
      </div>
      );
  }
}

export default SheepCounter;

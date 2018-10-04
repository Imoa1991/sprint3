import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours:0,
      minute:0,
      second:0
    };
    this.updateClock = this.updateClock.bind(this);
    this.intervalo = setInterval(this.updateClock,1000);
  }
  updateClock() {
    let time = new Date();
    let timeS = time.getSeconds();
    let timeM = time.getMinutes();
    let timeH = time.getHours();

  this.setState ({
    hours:timeH,
    minutes:timeM,
    seconds:timeS
  })
}

  render() {
    return (
      <div className="App">
        <p>{this.state.hours}:{this.state.minutes}:{this.state.seconds}</p>
      </div>
    );
  }
}
export default Clock;

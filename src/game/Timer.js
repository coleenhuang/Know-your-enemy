import React, { useState, useEffect } from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      sec: 0,
      active: false
    }
  }

  startTimer = () => {
    this.setState({active: !this.state.active})
    console.log(this.state.active)
  }

  render () {
    return (
      <div>
        <p>00:00</p>
        <button type='button' onClick={this.startTimer}>Start</button>
      </div>

    )
  }
}

export default Timer;

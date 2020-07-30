import React, { useState, useEffect } from 'react';


//convert this to using hooks like the tutorial
//Currently not working
const Timer = () => {

    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
      setIsActive(!isActive)
    }

    function reset() {
      setSeconds(0);
      setIsActive(false);
    }

    useEffect(() => {
      let interval = null;
      if(isActive) {
        //Runs function setSeconds every second
        interval = setInterval(() => {
          setSeconds(seconds => seconds+1)
        }, 1000);
      }
      else if (!isActive && seconds !== 0) {
        //stops setInterval from running
        clearInterval(interval);
      }
      //returning a new function
      //equivalent to componentWillUnmount
      return () => clearInterval(interval);
    }, [isActive, seconds])


    return (
      <div>
        <p> {seconds}s</p>
        <button type='button' onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button type='button' onClick={reset}>
        Reset
        </ button>

      </div>

    );
}

export default Timer;

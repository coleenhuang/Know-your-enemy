import React from 'react';
import Instructions from './Instructions';
import Play from './Play';

const Start = () => {
  return (
    <div>
      <Instructions />
      <div>
        {/*Illustration of microscope*/}
        <p>Get to know your enemies</p>
      </div>
      <Play />
    </div>
  )
}


export default Start;

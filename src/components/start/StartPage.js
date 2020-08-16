import React from 'react';
import Instructions from './Instructions';
import PlayButton from './PlayButton';

const StartPage = () => {
  return (
    <div>
      <Instructions />
      <div>
        {/*Illustration of microscope*/}
        <p>Get to know your enemies</p>
      </div>
      <PlayButton />
    </div>
  )
}


export default StartPage;

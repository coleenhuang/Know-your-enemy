import React from 'react';
import { Link } from 'react-router-dom';

const PlayButton = () => {
  return (
    <Link to='game'>
    <div>
      {/*Illustration of petri dish*/}
      <p>Play</p>
    </div>
    </Link>
  )
}

export default PlayButton;
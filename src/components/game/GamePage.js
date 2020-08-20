import React from 'react';
import CardsContainer from './CardsContainer';
import Timer from './Timer'
import styles from './GamePage.module.css'
import Card from './Card';

const GamePage = () => {
  
  return (
    <div >
      <CardsContainer />
      <Timer />
    </div>
  )
}


export default GamePage;

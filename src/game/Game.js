import React from 'react';
import Card from './Card.js'
import styles from './Game.module.css'

const Game = () => {
  function cardContainer(num){
    //making a loop and putting return statements in it doesn't work
    //Need to put the components into an array first before rendering
    let cardList = [];
    for (let i=0; i < num; i++) {
      cardList.push(<Card key={i} />)
    }
    return cardList
  }
  return (
    <div className={styles.container}>
      {cardContainer(4)}
    </div>
  )
}


export default Game;

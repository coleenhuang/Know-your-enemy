import React, { useState } from 'react';
import styles from './Card.module.css';


const Card = (props) => {
  const [flip, setFlip] = useState(false)

  const flipCard = () => {
    setFlip(!flip)
  }

  return (
    <div className={styles.card} onClick={flipCard}>
      <div className={`${flip?styles.hidden:styles.active} ${styles.front}`}>
      </div>
      <div className={flip?styles.active:styles.hidden}>
        {props.back}
      </div>
    </div>
  )
}

export default Card;

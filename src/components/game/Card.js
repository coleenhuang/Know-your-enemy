import React from 'react';
import styles from './Card.module.css'

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div>
        Card Front
      </div>
      <div>
        {props.back}
      </div>
    </div>
  )
}

export default Card;

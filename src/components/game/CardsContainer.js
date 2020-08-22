import React from 'react';
import Card from './Card'
import { connect } from 'react-redux';
import styles from './CardsContainer.module.css'

const CardsContainer = (props) => {
    const shuffleArray = (array) => {
        //shuffles the array
        //Fischer-Yates shuffle
        for( let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    return (
        <div>
            <div className={styles.gridContainer}>
                {shuffleArray(props.cardList).map((card, index) => {
                    return (
                        <Card key={card.index} info={card}/>
                    )
                })}
            </div>
        </div>
            
    )
}

const mapStateToprops = (state) => {
    return {cardList: state.cardList};
}

export default connect(mapStateToprops)(CardsContainer);
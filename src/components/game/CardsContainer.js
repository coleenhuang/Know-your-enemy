import React from 'react';
import Card from './Card'
import { connect } from 'react-redux';


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
            {shuffleArray(props.cardList).map(card => {
                return (
                    <Card key={card.id} back={card.back}/>
                )
            })}
        </div>
    )
}

const mapStateToprops = (state) => {
    return {cardList: state.cardList};
}

export default connect(mapStateToprops, null)(CardsContainer);
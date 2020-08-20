import React from 'react';
import Card from './Card'
import { connect } from 'react-redux';


const CardsContainer = (props) => {
    //FIXME:
    //shuffle the array
    //generate the cards 
    

    

    return (
        <div>
            {props.cardList.map(card => {
                return (
                    <Card key={card.id} back={card.back}/>
                )
            })}
        </div>
    )
}

const mapStateToprops = (state) => {
    return {cardList: state.cardList}
}

export default connect(mapStateToprops, null)(CardsContainer);
import React from 'react';
import Card from './Card'
import { connect } from 'react-redux';


const CardsContainer = (props) => {
    return (
        <div>
            {props.cardList.map(card => {
                return (
                    <Card key={card.id} />
                )
            })}
        </div>
    )
}

const mapStateToprops = (state) => {
    return {cardList: state.cardList}
}

export default connect(mapStateToprops, null)(CardsContainer);
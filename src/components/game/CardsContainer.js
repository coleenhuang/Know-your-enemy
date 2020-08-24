import React from 'react';
import Card from './Card'
import { connect } from 'react-redux';
import * as actions from '../../actions'
import styles from './CardsContainer.module.css'

class CardsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shuffled: []
        }
    }
    componentDidMount() {
        const shuffled = this.shuffleArray(this.props.cardList);
        this.setState({shuffled: shuffled})
    }
     componentDidUpdate() {
        const first = this.props.first;
        const second = this.props.second;
        if (first && second){
        this.matchCards(this.props.first, this.props.second)
        }
     }

    shuffleArray (array) {
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

    matchCards(firstCard, secondCard) {
        if (firstCard.type === secondCard.type) {
            this.props.matchedCards();
            console.log('cards matched')
        }
        else {
            console.log('cards don\'t match')
        }
        this.props.resetSelectedCards();
    }

    render() {
        return (
        <div>
            <div className={styles.gridContainer}>
                {this.state.shuffled.map((card, index) => {
                    return (
                        <Card key={card.index} info={card} />
                    )
                })}
            </div>
        </div>
            
    )}
}

const mapStateToprops = (state) => {
    return {
        cardList: state.cardList,
        first: state.selected.first,
        second: state.selected.second
    };
}

export default connect(mapStateToprops, actions)(CardsContainer);
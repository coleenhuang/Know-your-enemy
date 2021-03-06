import React from 'react';
import Card from './Card'
import { connect } from 'react-redux';
import * as actions from '../../actions'
import styles from './CardsContainer.module.css'

class CardsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shuffled: [],
            flipped: []
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
            this.props.matchedCards(firstCard.id, secondCard.id);
            console.log('cards matched', firstCard.id, secondCard.id);
            
        }
        else {
            console.log('cards don\'t match');
            //delays the cards flipping back to the default
            setTimeout(() => {this.setState( state => {
                const flipped = state.flipped.filter(i => i!==firstCard.id && i!==secondCard.id);
                return { flipped }
            })
            }, 1500)
        }
        this.props.resetSelectedCards();
        console.log(this.state)
    }


    flipCard = (id) => {
        if(!this.state.flipped.includes(id)){
            this.setState(state => {
                const flipped = state.flipped.concat(id)
                return {flipped}
            })
        }
        else {
            this.setState( state => {
                const flipped = state.flipped.filter(i => i!==id);
                return {flipped}
            })
        }
    }

    render() {
        return (
        <div>
            <div className={styles.gridContainer}>
                {this.state.shuffled.map((card, index) => {
                    const flip = this.state.flipped.includes(card.id)?true:false
                    const match = this.props.matched.includes(card.id)?true:false
                    return (
                        <Card key={card.index} info={card}
                        match={match} 
                        flip={flip} 
                        flipCard={this.flipCard}/>
                    )
                })}
            </div>
        </div>
            
    )}
}

const mapStateToProps = (state) => {
    return {
        cardList: state.cards,
        first: state.selected.first,
        second: state.selected.second,
        matched: state.matched
    };
}

export default connect(mapStateToProps, actions)(CardsContainer);
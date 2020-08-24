import { combineReducers } from 'redux';
import selectedCards from './selectedCards';
import cardList from './cardList';
import matchedCards from './matchedCards';

export default combineReducers({
    cardList: cardList,
    selected: selectedCards,
    matched: matchedCards
})
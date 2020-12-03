import { combineReducers } from 'redux';
import selectedCards from './selectedCards';
import matchedCards from './matchedCards';
import fetchCards from './fetchCards';


export default combineReducers({
    cards: fetchCards,
    selected: selectedCards,
    matched: matchedCards
})
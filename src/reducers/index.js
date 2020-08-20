import { combineReducers } from 'redux';
import selectedCards from './selectedCards';
import cardList from './cardList';

export default combineReducers({
    cardList: cardList,
    selected: selectedCards
})
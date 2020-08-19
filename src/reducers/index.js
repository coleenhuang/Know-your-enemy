import { combineReducers } from 'redux';
import selectedCards from './selectedCards';

export default combineReducers({
    selected: selectedCards
})
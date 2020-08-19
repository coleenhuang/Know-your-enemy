import { 
    SELECT_FIRST_CARD, SELECT_SECOND_CARD, RESET_SELECTED_CARDS
} from '../actions/types';

export default function(state={}, action) {
    switch(action.type) {
        case SELECT_FIRST_CARD:
            return {...state, first: action.payload}
        case SELECT_SECOND_CARD:
            return {...state, second: action.payload}
        case RESET_SELECTED_CARDS:
            return {...state, first: undefined, second: undefined}
        default:
            return state
        }
}
import { SELECT_SECOND_CARD } from '../actions/types';

export default function(state=[], action) {
    switch(action.type) {
        case SELECT_SECOND_CARD:
            return [...state, action.payload]
        default:
            return state
    }
}
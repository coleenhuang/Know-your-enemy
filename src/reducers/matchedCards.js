import { MATCHED_CARDS, RESET_MATCHED_CARDS } from '../actions/types';

export default function (state=[], action) {
    switch(action.type) {
        case MATCHED_CARDS:
            return [...state, action.payload[0], action.payload[1]]
        case RESET_MATCHED_CARDS:
            return []
        default: 
            return state
    }
}
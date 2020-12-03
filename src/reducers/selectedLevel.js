import { SELECT_LEVEL, RESET_LEVEL } from '../actions/types';

export default function (state=[], action) {
    switch (action.type) {
        case SELECT_LEVEL:
            return action.payload
        case RESET_LEVEL:
            return undefined
        default:
            return state
    }
}
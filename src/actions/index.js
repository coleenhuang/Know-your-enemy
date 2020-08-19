import {SELECT_FIRST_CARD, SELECT_SECOND_CARD } from './types';

export function selectFirstCard(id) {
    return {
        type: SELECT_FIRST_CARD,
        payload: id
    }
}

export function selectSecondCard(id) {
    return {
        type: SELECT_SECOND_CARD,
        payload: id
    }
}
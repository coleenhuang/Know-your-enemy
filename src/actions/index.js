import {SELECT_FIRST_CARD, SELECT_SECOND_CARD, RESET_SELECTED_CARDS, MATCHED_CARDS } from './types';

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

export function resetSelectedCards() {
    return {
        type: RESET_SELECTED_CARDS
    }
}

export function matchedCards(id) {
    return {
        type: MATCHED_CARDS,
        payload: id
    }
}


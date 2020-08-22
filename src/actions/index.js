import {SELECT_FIRST_CARD, SELECT_SECOND_CARD, RESET_SELECTED_CARDS, MATCHED_CARDS } from './types';

export function selectFirstCard(id, type) {
    return {
        type: SELECT_FIRST_CARD,
        payload: {id: id, type: type}
    }
}

export function selectSecondCard(id, type) {
    return {
        type: SELECT_SECOND_CARD,
        payload: {id: id, type: type}
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


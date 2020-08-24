import {SELECT_FIRST_CARD, SELECT_SECOND_CARD, RESET_SELECTED_CARDS, MATCHED_CARDS, RESET_MATCHED_CARDS } from './types';

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

export function matchedCards(firstId, secondId) {
    return {
        type: MATCHED_CARDS,
        payload: firstId, secondId
    }
}


export function resetMatchedCards() {
    return {
        type: RESET_MATCHED_CARDS
    }
}

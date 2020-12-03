import axios from 'axios';
import {FETCH_CARDS, SELECT_FIRST_CARD, SELECT_SECOND_CARD, RESET_SELECTED_CARDS, MATCHED_CARDS, RESET_MATCHED_CARDS , SELECT_LEVEL, RESET_LEVEL} from './types';

export function fetchCards() {
    const response = axios.get(' https://know-your-enemy-api.herokuapp.com//api/v1/cards');
    return {
      type: FETCH_CARDS,
      payload: response
    }
  }

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
        payload: [firstId, secondId]
    }
}


export function resetMatchedCards() {
    return {
        type: RESET_MATCHED_CARDS
    }
}

export function selectLevel(level) {
    return {
        type: SELECT_LEVEL,
        payload: level
    }
}

export function resetLevel() {
    return {
        type: RESET_LEVEL
    }
}



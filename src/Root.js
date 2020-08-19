import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'
import cardSets from './cardSets';

export default ({children, initialState={cardSets}}) => {
    return (
        <Provider store={createStore(reducers, initialState)}>
            {children}
        </Provider>
    )
}
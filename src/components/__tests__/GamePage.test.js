import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme'

import GamePage from '../game/GamePage';
import Timer from '../game/Timer';
import CardsContainer from '../game/CardsContainer';

describe('rendered components on Game Page', () => {
    let wrapped;
    
    beforeEach(() => {
        wrapped = shallow(
            <GamePage />
        );
    })
    
    it('renders the card container', () => {
        expect(wrapped.find(CardsContainer)).toHaveLength(1);
    });

    it('renders a timer', () => {
        expect(wrapped.find(Timer)).toHaveLength(1);
    });
})

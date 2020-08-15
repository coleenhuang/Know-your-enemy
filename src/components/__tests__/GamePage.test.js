import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme'

import GamePage from '../game/GamePage';
import Timer from '../game/Timer';
import Card from '../game/Card';

describe('rendered components on Game Page', () => {
    let wrapped;
    beforeEach(() => {
        wrapped = shallow(
            <GamePage />
        );
    })
    
    it('renders 4 cards', () => {
        expect(wrapped.find(Card)).toHaveLength(4);
    });

    it('renders a timer', () => {
        expect(wrapped.find(Timer)).toHaveLength(1);
    });
})

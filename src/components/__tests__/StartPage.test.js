import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import StartPage from '../start/StartPage';
import Instructions from '../start/Instructions';
import Play from '../start/Play'

describe('rendered components on the start page', () => {
    let wrapped;
    beforeEach(() => {
        wrapped = shallow( 
            <StartPage />
        );
    })
    it('shows the instructions', () => {
        expect(wrapped.find(Instructions)).toHaveLength(1)
    })
    it('shows the play button', () => {
        expect(wrapped.find(Play)).toHaveLength(1)
    })
})
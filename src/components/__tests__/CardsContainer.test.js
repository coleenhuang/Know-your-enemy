import React from 'react';
import { mount } from 'enzyme';
import Root from '../../Root';

import CardsContainer from '../game/CardsContainer';
import Card from '../game/Card';

let wrapped;

beforeEach(() => {

    wrapped = mount(
        <Root>
            <CardsContainer />
        </Root>
    )
})

afterEach(() => {
    wrapped.unmount()
})

it('has one card per element', () => {
    expect(wrapped.find(Card)).toHaveLength(6)
})
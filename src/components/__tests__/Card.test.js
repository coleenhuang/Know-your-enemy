import React from 'react';
import { shallow } from 'enzyme';

import Card from '../game/Card';

let wrapped;

beforeEach(() => {
    wrapped = shallow(
        <Card />
    );
})

it('was passed the prop back', () => {
    expect(wrapped.props('back')).toBeTruthy();
})
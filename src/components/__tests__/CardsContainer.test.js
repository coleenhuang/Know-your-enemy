import React from 'react';
import { mount } from 'enzyme';
import Root from '../../Root';
import store from '../../store';
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

it('shuffles the cardList array', () => {
    const cardList = store.getState().cardList;
    const unshuffled = () => {
        return(
            <div>
                {cardList.map(card => <Card key={card.id} back={card.back}/>)}
            </div>
            )
        }
    expect(CardsContainer).not.toEqual(unshuffled);
    
})
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import App from '../App';
import Header from '../Header';
import StartPage from '../start/StartPage'
import GamePage from '../game/GamePage';
import NotFound from '../NotFound';

describe('the router', () => {
  let wrapped;
  afterEach(() => {
    wrapped.unmount();
  })

  it('renders the header and notFound page when the path is invalid', () =>{
    wrapped = mount(
     <MemoryRouter initialEntries={['/random']} 
      initialIndex={0}>
       <App />
     </MemoryRouter>
   );
 
   expect(wrapped.find(Header).length).toEqual(1);
   expect(wrapped.find(StartPage).length).toEqual(0);
   expect(wrapped.find(NotFound).length).toEqual(1);
   
 })

  it('renders the header and start page when the path is /', () =>{
     wrapped = mount(
      <MemoryRouter initialEntries={['/']}
      initialIndex={0}>
        <App />
      </MemoryRouter>
    );
  
    expect(wrapped.find(Header).length).toEqual(1);
    expect(wrapped.find(StartPage).length).toEqual(1);
  })
  
  it('renders the header and game page when the path is /game', () =>{
    wrapped = mount(
      <MemoryRouter initialEntries={['/game']}
      initialIndex={0}>
        <App />
      </MemoryRouter>
    );
  
    expect(wrapped.find(Header).length).toEqual(1);
    expect(wrapped.find(GamePage).length).toEqual(1);

  })


})



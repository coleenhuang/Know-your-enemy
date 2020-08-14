import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import App from '../App';
import Header from '../Header';
import Start from '../start/Start'
import Game from '../game/Game';
import NotFound from '../NotFound';

describe('the router', () => {
  let wrapped;
  afterEach(() => {
    wrapped.unmount();
  })

  it('renders the header and start page when the path is /', () =>{
     wrapped = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
  
    expect(wrapped.find(Header).length).toEqual(1);
    expect(wrapped.find(Start).length).toEqual(1);
  })
  
  it('renders the header and game page when the path is /game', () =>{
    wrapped = mount(
      <MemoryRouter initialEntries={['/game']}>
        <App />
      </MemoryRouter>
    );
  
    expect(wrapped.find(Header).length).toEqual(1);
    //FIXME: Should show game component, yet in tests shows Start component instead
    //Weirdly the route works fine when I run it in the browser
    expect(wrapped.find(Game).length).toEqual(1);

  })

  it('renders the header and notFound page when the path is invalid', () =>{
    wrapped = mount(
     <MemoryRouter initialEntries={['/random']}>
       <App />
     </MemoryRouter>
   );
 
   expect(wrapped.find(Header).length).toEqual(1);
   //FIXME: Should show NotFound component, yet doesn't show it
    //Weirdly the route works fine when I run it in the browser
   expect(wrapped.find(NotFound).length).toEqual(1);
   expect(wrapped.find(Start).length).toEqual(0);
 })
})



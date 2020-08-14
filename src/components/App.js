import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Start from './start/Start'
import Game from './game/Game'
import NotFound from './NotFound';
import './App.css'

function App() {
  return (
    <div className="App main-container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={Start} />
          <Route path='/game' component={Game} />
          <Route component={NotFound} />
        </Switch>
        
      </ BrowserRouter>
    </div>
  );
}

export default App;

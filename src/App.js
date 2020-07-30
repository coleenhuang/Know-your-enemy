import React from 'react';
import { Route } from 'react-router-dom'
import Header from './Header'
import Start from './start/Start'
import Game from './game/Game'
import './App.css'

function App() {
  return (
    <div className="App main-container">
      <Header />
      <Route path='/' exact component={Start} />
      <Route path='/game' exact component={Game} />
    </div>
  );
}

export default App;

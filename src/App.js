import React from 'react';
import { Route } from 'react-router-dom'
import Start from './start/Start'
import Game from './game/Game'
import './App.css'

function App() {
  return (
    <div className="App main-container">
      <Route path='/' exact component={Start} />
      <Route path='/game' exact component={Game} />
    </div>
  );
}

export default App;

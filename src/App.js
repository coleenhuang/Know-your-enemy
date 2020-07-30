import React from 'react';
import { Route } from 'react-router-dom'
import Start from './start/Start'
import Game from './game/Game'

function App() {
  return (
    <div className="App">
      <Route path='/' exact component={Start} />
      <Route path='/game' exact component={Game} />
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import StartPage from './start/StartPage'
import GamePage from './game/GamePage'
import NotFound from './NotFound';
import ResultPage from './result/ResultPage'
import './App.css'

function App() {
  return (
    <div className="App main-container">
        <Header />
        <Switch>
          <Route path='/' exact component={StartPage} />
          <Route path='/game' component={GamePage} />
          <Route path='/result' component={ResultPage} />
          <Route component={NotFound} />
        </Switch>
    </div>
  );
}

export default App;

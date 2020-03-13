import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import HomePage from './views/homePage'
import TestPage from './views/testPage'
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/test'>
            <TestPage />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

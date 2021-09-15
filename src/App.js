import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import ShowPage from './pages/ShowPage'
import Header from './components/layout/Header'

import {ShowState} from './context/ShowContext';
import {AlertState} from './context/AlertContext'

function App() {

  return (
    <ShowState>
    <AlertState>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/shows/:id" component={ShowPage} />
        </Switch>
      </Router>
      </AlertState>
    </ShowState>
    );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import PenguinPage from './pages/Penguin';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Pingvinboka</h1>
        </header>
        <main>
          <Switch>
            <Route path="/pingvin/:penguinId" component={PenguinPage} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;

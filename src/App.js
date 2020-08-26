import React from 'react';
import Composition from './Composition'
import Portefeuille from './Portefeuille'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header/Header'

export default function App() {

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/portefeuille" exact component={Portefeuille} />
          <Route path="/Composition" component={Composition} />
          <Route path="/Composition" component={Composition} />
        </Switch>
      </div>

    </Router>
  );
}


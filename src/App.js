import React from 'react';
import Composition from './Composition'
import Portefeuille from './Portefeuille'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header/Header'
import ESG from './ESG';
import Climat from './Climat';

export default function App() {

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/portefeuille" exact component={Portefeuille} />
          <Route path="/Composition" component={Composition} />
          <Route path="/Composition" component={Composition} />
          <Route path="/ESG" component={ESG} />
          <Route path="/Climat" component={Climat} />
        </Switch>
      </div>

    </Router>
  );
}


// Exemplo no App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from 'src/js/components/NavBar';
import PaginaInicial from 'src/js/pages/home';
import Mentoria from 'src/js/pages/mentoria';
import Loja from 'src/js/pages/Loja';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={PaginaInicial} />
          <Route path="/mentoria" component={Mentoria} />
          <Route path="/loja" component={Loja} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

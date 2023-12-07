// Exemplo no App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import PaginaInicial from './pages/home';
import Mentoria from './pages/mentoria';
import Loja from './pages/Loja';

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

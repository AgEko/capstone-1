import React from 'react';
//import inventory from './inventory.json'
import './App.css';
import Nav from './components/Nav'
import Store from './components/Store'
import Cart from './components/Cart'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/Store" component={Store} />
          <Route path="/Cart" component={Cart} />
        </Switch>
      

      </div>
    </Router>
  );
}

export default App;

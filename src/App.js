import React from 'react';
//import inventory from './inventory.json'
import './App.css';
import Nav from './components/Nav'
import Store from './components/Store'
import Cart from './components/Cart'
import Result from './components/Result'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Store} />
          <Route path="/Store" component={Store} />
          <Route path="/Result" component={Result} />
          <Route path="/Cart" component={Cart} />
        </Switch>
      

      </div>
    </Router>
  );
}

export default App;

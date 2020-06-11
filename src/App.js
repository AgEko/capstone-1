import React, {useState} from 'react';
import inventory from './inventory.json'
import './App.css';
import Nav from './components/Nav'
import Store from './components/Store'
import Cart from './components/Cart'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  const [products, setProducts] = useState(inventory.products)
  const [cartItems, setCartItems] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const [search, setSearch] = useState('')
  const [count, setCount] = useState(0)
    

  

  return (
    <Router>
      <div className="App">
        <Nav 
          cartItems={cartItems}
        />
        <Switch>
          <Route exact path="/" render = {() => (
              <Store 
              products={products} 
              setProducts={setProducts} 
              cartItems={cartItems}
              setCartItems={setCartItems}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              search={search}
              setSearch={setSearch}
              count={count}
              setCount={setCount}
              />
          )}/> 
          <Route exact path="/Store" render = {() => (
              <Store 
              products={products} 
              setProducts={setProducts} 
              cartItems={cartItems}
              setCartItems={setCartItems}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              search={search}
              setSearch={setSearch}
              count={count}
              setCount={setCount}
              />
          )}/> 
          <Route exact path="/Cart" render = {() => (
              <Cart 
              cartItems={cartItems}
              setCartItems={setCartItems}
              count={count}
              setCount={setCount}
              />
          )}/> 
          

          
        </Switch>
      

      </div>
    </Router>
  );
}

export default App;


//BONEYARD

/* <Route exact path="/" component={Store} products={products} setProducts={setProducts}/> */

//

// <Route path="/Store" component={Store} />
// <Route path="/Result" component={Result} />
// <Route path="/Cart" component={Cart} />
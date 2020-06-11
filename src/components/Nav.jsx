import React from 'react'
import { Link } from 'react-router-dom'

function Nav(cartItems) {
  const navStyle = {
    color: 'whitesmoke',
    textDecoration: 'none'
  };

console.log(cartItems)
// const cartCount = cartItems.length()


  

  return (
    <nav className="test2">
      <div className="logo"><img className="logo" src="/images/logo.png" alt="logo"/></div>
      <div className="test">Unga Bunga's Grunga Dunga</div>
      <ul>
        <Link style={navStyle} to="/store">
          <li>Store</li>
        </Link>
        <Link style={navStyle} to="/cart">
          <li>Cart</li>
        </Link>
        
      </ul>
      

    </nav>
  );
}
  
  export default Nav;
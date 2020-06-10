import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  const navStyle = {
    color: 'whitesmoke'
  };

  return (
    <nav>
      <div>Logo</div>
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
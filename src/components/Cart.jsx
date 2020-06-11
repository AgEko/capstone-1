import React from 'react'
//import React, {useState} from 'react'
// import Product from './Product'
// import inventory from '../inventory.json'

function Cart({products, setProducts, cartItems, setCartItems, cartTotal, setCartTotal}) {

    // const cartDisplay= (cartItems) => {
    //   if (cartItems.length > 0)
    //   {
    //     cartItems.map((cartItem, i) => (
          
    //     ))

    //     return (
    //     <li>{cartItems}</li>
    //     )
    //   }
    // }
    
    

    return (
      <div>
        <div><h1 className="test">U.B.G.D.</h1></div>
        

        <div className="cart">
          <div className="six">
            <div className="six">Total price : {}</div>
            {cartItems.map((cartItems) => (
              <div className="cart-items">
                <ul>
                  <li>{cartItems.name}</li>
                  <li>By: {cartItems.make}</li>
                </ul>
                <span>Price: {parseFloat(cartItems.price)}</span>
              </div>
                ))}
            <div className="six">Total price : {}</div>
          </div>
          <div className="four">Something you buying?</div>
        </div>
  
      </div>
    );
  }
  
  export default Cart;
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
        <h1> Cart page</h1>

        {cartItems.map((cartItems) => (
            <div> 
                <ul>
                    <li className='name'>{cartItems.name} </li>
                    <li>Make: {cartItems.make}</li>
                    <li>SN: {cartItems.serial}</li>
                    <li>Price: {parseFloat(cartItems.price)}$</li>
                </ul>
            </div>))}
            
         <br />
      <span>Total price : {}</span>

  
      </div>
    );
  }
  
  export default Cart;
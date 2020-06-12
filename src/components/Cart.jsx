import React from 'react'

function Cart({cartItems, setCartItems,count, setCount}) {

    return (
      <div>
        <div><h1 className="test">U.B.G.D.</h1></div>
        
        <div className="cart">
          <div className="six">
            <div className="six">Total price : {count}</div>
            {cartItems.map((cartItems) => (
              
              <div className="cart-items">
                <div><img className="cart-items-img" src= {cartItems.image} alt={cartItems.name + " image"}/></div>
                <ul>
                  <li>{cartItems.name}</li>
                  <li>By: {cartItems.make}</li>
                </ul>
                <span>Price: {cartItems.price}</span>
              </div>
              
                ))}
                
            <div className="six">Total price : {count}</div>
          </div>
          <div className="cart-checkout">
          <div>Something you buying?</div>
          <div></div><br></br>
          <div className="bigpay">{count} Bungas</div><br></br>
          <div>You pay</div>
          <div>You pay now</div><br></br>
          <button className="pay-bungas"
          onClick={() => {
            setCartItems([])
            setCount(0)
          }}
          
          >Pay Bungas</button>
          </div>
        </div>
  
      </div>
    );
  }
  
  export default Cart;
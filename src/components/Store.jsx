import React from 'react'
import Filter from './Filter'
import StoreDisplay from './StoreDisplay'

function Store({products, setProducts, cartItems, setCartItems, cartTotal, setCartTotal}) {

    

    return (
        <div className="main-page">
            <Filter 
            products={products} 
            setProducts={setProducts} 
            cartItems={cartItems}
            setCartItems={setCartItems}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
            />
            <StoreDisplay
            products={products} 
            setProducts={setProducts} 
            cartItems={cartItems}
            setCartItems={setCartItems}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
            />
        </div>
    );
}
  
  export default Store;
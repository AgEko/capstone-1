import React, {useState} from 'react'
import Product from './Product'
import inventory from '../inventory.json'

function Cart() {

    const [products, setProducts] =  useState()
    

    //const product = inventory.products.map()
    

    return (
      <div>
  
       <h1> Cart page</h1>


      {inventory.products.map((product) => (
        <Product 
          key={product.id}
          product={product}

        >
          

        </Product>
      ))}


      
        
  
      </div>
    );
  }
  
  export default Cart;
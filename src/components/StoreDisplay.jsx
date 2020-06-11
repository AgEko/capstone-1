import React, {useState} from 'react'
import Product from './Product'
import inventory from '../inventory.json'


const Filters = ({products, setProducts, cartItems, setCartItems, cartTotal, setCartTotal}) => {

   
    //Todo add logic for setCartItems
    //const [cartItems, setCartItems] = useState([])

    return (
        <div className='store-display'>
            <div className='store-display-inner'>
                    

                {products.map((products) => (
            <Product  
            key={products.id}
            products={products} 

            setProducts={setProducts} 
            cartItems={cartItems}
            setCartItems={setCartItems}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
            />
      ))}

                    
                </div>
            </div>
    )
    
}

export default Filters;

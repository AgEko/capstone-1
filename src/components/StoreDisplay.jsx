import React from 'react'
import Product from './Product'
import inventory from '../inventory.json'


const Filters = (props) => {
   
    return (
        <div className='store-display'>
            <div className='store-display-inner'>
                    

                {inventory.products.map((product) => (
            <Product 
            key={product.id}
            product={product}
            />
      ))}

                    
                </div>
            </div>
    )
    
}

export default Filters;

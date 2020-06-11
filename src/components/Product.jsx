import React, {useState} from 'react'


function product({products, setProducts, cartItems, setCartItems, cartTotal, setCartTotal}) 
{

    //updating qty
        // function decInventoryQty(i) 
        // {
        //     const arrayCopy =[...products]

        //     arrayCopy[i].quanity -= 1
        //     setCartItems(arrayCopy)

        // }
    //not ready yet

    
    return (
        <div className='store-display-item'>
            <div><img src= {products.image} alt={products.name + " image"}/></div>
            
            <ul>
                <li className='name'>{products.name} </li>
                <li>Make: {products.make}</li>
                <li>SN: {products.serial}</li>
                <li>Price: {parseFloat(products.price)}$</li>
            </ul>

            <button onClick={() => {

                setCartItems(cartItems.concat(products))
                console.log(cartItems)
                

                //todo logic
                //decInventoryQty(index);

                //to logic
                //setCartTotal(cartTotal + product.price)

            }}>
            
                Add To Cart

            </button>  
            
        </div>
    )
}
export default product;
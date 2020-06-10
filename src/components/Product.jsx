import React from 'react'


function product(props) {

    // const [cartItems, setCartItems] = useState()

    const addToCart = () => {
        console.log("MISTOR MONEYBAGS")
    }


    
    return (
    
        <div className='store-display-item'>
            <div><img src= {props.product.image} alt={props.product.name + " image"}/></div>
            <ul>
                <li className='name'>{props.product.name} </li>
                <li>Make: {props.product.make}</li>
                <li>SN: {props.product.serial}</li>
                <li>Price: {parseFloat(props.product.price)}$</li>
            </ul>
            <button onClick={addToCart}>Buy</button>  
            
        </div>
        
    
    )
}
export default product;
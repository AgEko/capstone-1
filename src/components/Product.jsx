import React, { useState } from 'react'


function product(props) {



    
    return (
        <div>
            <img src= {props.product.image}/>
            {props.product.name}
            {props.product.serial}

        </div>
    )
}
export default product;
import React, {useState} from 'react'


class Product {
    name = '';
    serial = '';
    price = '';
    manufacturer = '';
    tags = '';
    img = '';
}



export default Product;

// to make images come up, put in public folder, then do this <img src = {process.env.PUBLIC_URL + './image-assets/TH-logo.jpg'} alt = 'TH.com logo' className = 'logo' /> props to Abigail!
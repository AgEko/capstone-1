import React, { useState } from 'react'
import inventory from '../inventory.json'
import Product from './Product'
import ReactHtmlParser from 'react-html-parser';

const StoreDisplay = (props) => {
    const [products, setproducts] = useState([]);

    let testItem = new Product();
        testItem.name = 'Dunkey';
        testItem.serial = '404404404';
        testItem.price = '-51.50';
        testItem.manufacturer = 'Wet Gas';
        testItem.tags = 'Yees';
        testItem.img = <img src = {process.env.PUBLIC_URL + './logo192.png'} alt = 'TH.com logo' className = 'logo' />;
    
    let testNum = '12.01'
    const toInt = parseInt()

    let textEle = "<img src = {process.env.PUBLIC_URL + './logo192.png'} alt = 'TH.com logo' className = 'logo' />"
    let eleEle = ReactHtmlParser(textEle)

    
    return (
        <div className='store-display'>
            
            <div className='store-display-inner'>
                <div className='store-display-item'>
                    <div>{testItem.img}</div>
                    <ul>
                        <li className='name'>{inventory.Product.name} </li>
                        <li>Price: {testItem.price}$</li>
                        <li>Make: {testItem.manufacturer}</li>
                        <li>SN: {testItem.serial}</li>
                        <li>{parseFloat(inventory.Product.price)}</li>
                    </ul>
                    <button>Buy</button>
                    
                    
                    
                </div>
                <div className='store-display-item'>
                    ITEMZZZZ
                </div>
                <div className='store-display-item'>
                    ITEM
                </div>
                <div className='store-display-item'>
                    ITEM
                </div>
                <div className='store-display-item'>
                    ITEM
                </div>
                <div className='store-display-item'>
                    ITEM
                </div>
                <div className='store-display-item'>
                    ITEM
                </div>
                <div className='store-display-item'>
                    ITEM
                </div>
                <div className='store-display-item'>
                    ITEM
                </div>
                <div className='store-display-item'>
                    ITEM
                </div>
                <div className='store-display-item'>
                    ITEM
                </div>
                <div className='store-display-item'>
                    ITEM
                </div>
                <div className='store-display-item'>
                    ITEM
                </div>
            </div>
        </div>
    )
}

export default StoreDisplay;
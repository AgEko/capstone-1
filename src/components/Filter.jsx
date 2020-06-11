import React, { useState } from 'react'
import { Checkbox, List, ListItemText, ListItem } from '@material-ui/core';
import inventory from '../inventory.json'
import {Link} from 'react-router-dom'



const Filters = ({products, setProducts, cartItems, setCartItems, cartTotal, setCartTotal}) => {



        // const result = inventory.products.filter(p => 
        //     Object.values(p).includes(search))
        // console.log(result)
  

    const [search, setSearch] = useState("")

    const handleChange = val => 
        {
            // event.preventDefault();
            setSearch(val)
            

            
            
        }

        

   

    return (
        <div className="filter-main"> 
            <form>
                <input 
                value = {search}
                placeholder='Search'
                type='text'
                onChange={e => handleChange(e.target.value)}
                >
                </input>
                <input 
                type='submit' 
                value='Submit' 
                />
            </form>
            
            
            
        </div>
    )
    
}

export default Filters;


/* <form >
                <input 
                value = ""
                placeholder='Search'
                type='text'
                >
                </input>
            </form> */
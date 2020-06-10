import React, { useState } from 'react'
import { Checkbox, List, ListItemText, ListItem } from '@material-ui/core';
import inventory from '../inventory.json'
import {Link} from 'react-router-dom'



const Filters = (props) => {


        // const result = inventory.products.filter(p => 
        //     Object.values(p).includes(search))
        // console.log(result)
  

    const [search, setSearch] = useState("")

    const handleChange = val => 
        {
            // event.preventDefault();
            setSearch(val)
            console.log("value: ", val, "  :" , search)

            
            
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
                <input type='submit' value='Submit' />
            </form>
            
            <List >
            <h3>Filters</h3>
                <ListItem>
                    <Checkbox>VOID need balonga</Checkbox>

                    <ListItemText>
                        Checkbox 01
                    </ListItemText>   
                </ListItem>
               
            </List>
            
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
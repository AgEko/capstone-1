import React from 'react'

import { Checkbox, List, ListItemText, ListItem } from '@material-ui/core';


const Filters = (props) => {
   
    return (
        <div>
            
            <List className="flex-container  filter-main">
            <h3>Filters</h3>
                <ListItem>
                    <Checkbox>VOID need balonga</Checkbox>

                    <ListItemText>
                        Checkbox 01
                    </ListItemText>   
                </ListItem>
                <ListItem>
                    <Checkbox>VOID need balonga</Checkbox>

                    <ListItemText>
                        Checkbox 02
                    </ListItemText>   
                </ListItem>
                <ListItem>
                    <Checkbox>VOID need balonga</Checkbox>

                    <ListItemText>
                        Checkbox 03
                    </ListItemText>   
                </ListItem>

            </List>
            
        </div>
    )
    
}

export default Filters;

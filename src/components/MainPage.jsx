import React from 'react'
import Filter from './Filter'
import StoreDisplay from './StoreDisplay'
import Cart from './Cart'

const MainPage = (props) => {
    
    return (
        <div className="main-page">
            <Filter />
            <StoreDisplay />
            <Cart />
        </div>
    )
}

export default MainPage;
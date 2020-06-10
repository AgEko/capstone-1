import React from 'react'
import Filter from './Filter'
import StoreDisplay from './StoreDisplay'

function Store() {
    return (
        <div className="main-page">
            <Filter />
            <StoreDisplay />
        </div>
    );
}
  
  export default Store;
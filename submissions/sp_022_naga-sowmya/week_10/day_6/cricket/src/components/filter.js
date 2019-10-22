import React from 'react'

var data = JSON.parse(localStorage.getItem('players'))

const Filter = (match) => {
    const {params : {itemId}} = match;
    console.log("Filter")
    return (
        <div>
            
        </div>
    )
}

export default Filter
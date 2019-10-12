import React from 'react';

const CountrySelector = (props) => {
    return (
        <select className='custom-select' onChange={(e) => props.func(e)} name='country'>
            <option value=''>Select...</option>
            <option value='India'>India</option>
            <option value='Pakistan'>Pakistan</option>
            <option value='Australia'>Australia</option>
            <option value='South Africa'>South Africa</option>
            <option value='Sri Lanka'>Sri Lanka</option>
            <option value='England'>England</option>
            <option value='New ZeaLand'>New Zealand</option>
            <option value='West Indies'>West Indies</option>
            <option value='Bangaldesh'>Bangaldesh</option>
            <option value='Zimbabwe'>Zimbabwe</option>
        </select>
    )
}

export default CountrySelector;
import React from 'react';

import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navbar justify-content-between'>
            <Link to='/' className='navbar-brand'>PlayerDB</Link>
            <div className='d-flex justify-content-between'>
                <Link to='/' className='nav-link'>Create</Link>
                <Link to='/showplayers/0' className='nav-link'>Show Players</Link>
            </div>
        </nav>
    )
}

export default NavBar;
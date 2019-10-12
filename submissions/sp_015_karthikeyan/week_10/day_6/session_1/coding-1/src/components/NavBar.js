import React from 'react';

import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link to='/' className='navbar-brand'>PlayerDB</Link>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent'>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className='collapse navbar-collapse' id='#navbarSupportedContent'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <Link to='/create' className='nav-link'>Create</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/showplayers' className='nav-link'>Show Players</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
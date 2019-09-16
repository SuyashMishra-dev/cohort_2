import React from 'react';

import JoinUs from './JoinUs';
import ContactUs from './ContactUs';
import Download from './Download';
import Help from './Help';
import Home from './Home';
import Login from './JoinUs';
import Search from './Search';
import Settings from './Settings';

const Buttons = () => {
    return (
        <div style={{display: 'grid', gridTemplateColumns: 'auto auto'}}>
            <JoinUs />
            <ContactUs />
            <Download />
            <Help />
            <Home />
            <Login />
            <Search />
            <Settings />
        </div>
    );
}

export default Buttons;
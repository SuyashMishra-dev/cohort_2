import React from 'react';
import '../../App.css';

function Buttons(){
    return(
        <div>
            <div>
                <button className='JoinUs'>JOIN US</button>
                <button className='Settings'>SETTINGS</button>
            </div>
            <div>
                <button className='Login'>LOGIN</button>
                <button className='ContactUs'>CONTACT US</button>
            </div>
            <div>
                <button className='Search'>SEARCH</button>
                <button className='Help'>HELP</button>
            </div>
            <div>
                <button className='Home'>HOME</button>
                <button className='Download'>DOWNLOAD</button>
            </div>
        </div>
    );
}

export default Buttons;
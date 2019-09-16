import React from 'react';
import './a2.css';

function Buttons()
{
    return(
        <div class="App">
            <div>
                <p>
                    <button id="joinUs">JOIN US</button>
                </p>
                <p>
                    <button id="login">LOGIN</button>
                </p>
                <p>
                    <button id="search">SEARCH</button>
                </p>
                <p>
                    <button id="home">HOME</button>
                </p>
            </div>
            <div id="right">
                <p>
                <button id="settings">SETTINGS</button>
                </p>
                <p>
                <button id="contact">CONTACT US</button>
                </p>
                <p>
                <button id="help">HELP</button>
                </p>
                <p>
                <button id="download">DOWNLOAD</button>
                </p>
            </div>
        </div>

    )
}
export default Buttons;

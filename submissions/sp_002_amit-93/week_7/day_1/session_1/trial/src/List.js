import React from 'react';
import logo from './logo.svg';
import './Button.css';

 function List() {
    return (
        <div>
            <div>
            <button className="btn1">join us</button>
            <button className="btn2">Settings</button>
            <br></br>
            </div>

            <div>
                <button className="btn3">Login</button>
                <button className="btn4">Contact Us</button>
                <br></br>
            </div>

            <div>
               <button className="btn5">Search </button>
               <button className="btn6">Help</button>
               <br></br>
            </div>

        </div>
    );
}
export default List;
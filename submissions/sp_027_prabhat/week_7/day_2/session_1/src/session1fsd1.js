import React from 'react';
import logo from './logo.svg';
import './App.css';

function Fsd1(props){
    return(
        <div>
            <h1>Mobile Operating System</h1>
                <ul>
                    <li>{props.items.name1}</li>
                    <li>{props.items.name2}</li>
                    <li>{props.items.name3}</li>
                    <li>{props.items.name4}</li>
                </ul>

                <h1>Mobile Manufactures</h1>
                <ul>
                    <li>{props.items.name5}</li>
                    <li>{props.items.name6}</li>
                    <li>{props.items.name7}</li>
                    <li>{props.items.name8}</li>
                </ul>
        </div>
    );
}
export default Fsd1;
// ReactDOM.render(<Fsd1 />, document.querySelector('#root'))

import React from 'react';
import './App.css';

class Button extends React.Component{
    render(){
        return (
            <div>
                <button className="button" style={{backgroundColor: "red"}}>JOIN US</button>
                <button className="button1 bColor2">SETTINGS</button>
                <br></br>
                <button className="button bColor3">LOG IN</button>
                <button className="button1 bColor6">CONTACT US</button>
                <br></br>
                <button className="button bColor4">SEARCH</button>
                <button className="button1 bColor5">HELP</button>
                <br></br>
                <button className="button bColor7">HOME</button>
                <button className="button1 bColor8">DOWNLOAD</button>
            </div>
            
        );
    }
}

export default Button;
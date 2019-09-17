import React from 'react';

class SimpleList extends React.Component{
    render(){
        return (
        <div className="A1">
            <h1>Mobile Operating System</h1>
            <ul>
                <li>Android</li>
                <li>Blackberry</li>
                <li>iphone</li>
                <li>Windows Phone</li>
            </ul>
        </div>
        );
    }
}

export default SimpleList;


import React from 'react';
import './App.css';

export default class List1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            val :props.data
        };
    }
    render(){
        return(
            <div className = "App">
                <h1>Mobile Operatins System</h1>
                <ul>
                    {this.state.val.map (item => {
                        return<li>{item.name}</li>;
                    })}
                </ul>
                <h1>Mobile Manufactures</h1>
                <ul>
                    {this.props.data2.map(item => {
                        return<li>{item.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}
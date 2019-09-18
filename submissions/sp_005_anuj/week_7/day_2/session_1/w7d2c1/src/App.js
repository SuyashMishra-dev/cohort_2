import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './component/list.js'
import Button from './component/button.js'



class App extends React.Component {
    render() {
        var arr = [{
            label: 'JOIN US',
            color: 'blue'
        },
        {
            label: 'LOGIN',
            color: 'yellow'
        },
        {
            label: "SEARCH",
            color: "green",
        },
        {
            label: "HOME",
            color: "pink",
        }
      ]
        var arr2 = [
            {
                label: 'SETTINGS',
                color: 'skyblue'
            },
            {

            label: 'CONTACT US',
            color: 'red'
        },
         
        {
            label : "HELP",
            color : "violet",
        },
      
        {
            label : "DOWNLOAD",
            color : "olive",
        },
        ]
        return (
        <div class = "main">
            <div>
                {arr.map(item => {
                    return (<Button label={item.label} colors={item.color} />)
                })}
            </div>
            <div class = "size">
                {arr2.map(item => {
                    return (<Button label={item.label} colors={item.color} />)
                })}
            </div>

            <div>
                <List/>
            </div>

        </div>

        );
    }
}

export default App;
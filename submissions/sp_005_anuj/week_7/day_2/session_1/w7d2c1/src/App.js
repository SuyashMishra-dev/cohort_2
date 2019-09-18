import React from 'react';
import logo from './logo.svg';
import './component/button.css';
import './component/layout.css';
import List from './component/list2.js'
import Button from './component/button.js'
import Layout from './component/layout.js'

class App2 extends React.Component { 
    render() {
        var os = [
        {   
            heading : "Mobile Operating Sytem",
            name : "Android",
        },
        {
            name : "Blackberry",
        },
        {
            name : "iPhone",
        },
        {
            name : "Windows Phone",
        }
     ]
        var mfg = [
            {
                heading : "Mobile Manufactures",
                name : "Samsung",
            },
            {
                name : "HTC",
            },
            {
                name : "Micromax",
            },
            {
                name : "Apple",
            }
        ]
        return (
            <div>
            <div>
                {os.map(elm => {
                    return (<List name = {elm.name} heading = {elm.heading}/>)
                })}
            </div>
            <div>
                {mfg.map(elm => {
                    return (<List name={elm.name} heading={elm.heading} />)
                })}
            </div>
            </div>
        );
    }
}

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
        var os = [{
            name:"Android",
                }]
        return (
        <div>
            <div>
                <App2 />
            </div>
            <div className = "main">
                <div>
                    {arr.map(item => {
                        return (<Button label={item.label} colors={item.color} />)
                    })}
                </div>
                <div className = "size">
                    {arr2.map(item => {
                        return (<Button label={item.label} colors={item.color} />)
                    })}
                </div>
            </div>
                <div className = "mainls">
                    <Layout />
                </div>
            </div>
        );
    }
}

// export { App , App2 }
export default App;
// export default App2
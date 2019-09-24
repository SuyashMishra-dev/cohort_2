import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import List1 from './List1.js';
 import Button from './Button.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:[{name: "Andriod"}, {name: "Blackberry"},{name:"iPhone"}, {name:"windows phone"}],
      data1 : [{name: "samsung"}, {name: "micromax"},{name:"HTC"}, {name:"windows"}],
      btn : [
        {name:"JOIN Us",
         color:"red" 
        },
       {name:"SETTINGS",
       color:"green"
       },
       {
         name:"LOGIN",
         color:"orange"
       },
       {
         name:"CONTACT US",
         color:"pink"
       },
       {
         name:"HELP",
         color:"yellow"
       },
       {
         name:"HOME",
         color:"blue"
       },
       {
         name:"DOWNLOAD",
         color:"greenyellow"
       }, 
      ]
    };
 
  }
  
  render(){
  return (
    <div>
      <List1 data = {this.state.data} data2 = {this.state.data1}/>
      {this.state.btn.map(item =>{
        return(<Button btndata ={item.name} colour ={item.color} />)
      })}
      
    </div>
  );
}
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

 export default App;

import React from 'react';
import logo from './logo.svg';
import Fsd1 from './session1fsd1.js'
import './App.css';
import Button from './button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: "Android",
      name2: "Blckberry",
      name3: "iPhone",
      name4: "Windows Phone",
      name5: "Samsung",
      name6: "HTC",
      name7: "Micromax",
      name8: "Apple"
    }
  }
  
  render() {
    return (
      <div>
        <Fsd1 items={this.state} />
        <App2 />
      </div>
    )
  }
}

class App2 extends React.Component {
  render(){
    const arr1 = [
      {
        label:"JOIN US",
        colors:"blue",
      },
      {
        label:"LOG IN",
        colors:"yellow",
      },
      {
        label:"SEARCH",
        colors:"green",
      },
      {
        label:" HOME",
        colors:"pink",
      }
    ]

    const arr2 = [
      {
        label:"SETTING",
        colors:"skyblue",
      },
      {
        label:"CONTACT US",
        colors:"red",
      },
      {
        label:"HELP",
        colors:"voilet",
      },
      {
        label:"DOWNLOAD",
        colors:"olive",
      }
    ]

    return(
      <div>
        arr1.map(element) => {
          return (
            <Button label={Element.label} colors={Element.colors}/>
          );
        }
      </div>
    )
  }
}

export default App;


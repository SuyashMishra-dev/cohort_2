import React from 'react';
import './App.css';
import Lists from './components/a1/Lists'
import Buttons from './components/a2/Buttons'
import Card from './components/a3/Card'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
      os: ["Android", "IOS", "Windows Phone", "Symbian"],
      brands: ["Samsung", "Apple", "Google", "OnePlus"],
      btns: [
        {
          btn: "JOIN US",
          color: "purple",
        },
        {
          btn: "SETTINGS",
          color: "indigo",
        },
        {
          btn: "LOGIN",
          color: "plum",
        },
        {
          btn: "CONTACT US",
          color: "blue",
        },
        {
          btn: "SEARCH",
          color: "green",
        },
        {
          btn: "HELP",
          color: "yellow",
        },
        {
          btn: "HOME",
          color: "orange",
        },
        {
          btn: "DOWNLOAD",
          color: "red",
        },
      ],
    }
  }
  render() {
    var buttons = this.state.btns.map((el) => {
      return (
        <Buttons clr={el.color} label={el.btn} />

      )
    })
    return (
      <div>
        <Lists head={"Mobile Operating System"} name={this.state.os} />
        <Lists head={"Mobile Manufacturers"} name={this.state.brands} />
        {buttons}
        <Card />
      </div>
    )
  }
}
export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Show1 from './component/Show1'
import Button from './component/Button'
import Card from './component/Card'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      head1: "Mobile Operating Systems",
      head2: "Mobile manufacturers",
      arr1: ["Android", "IOS", "Windows Phone", "Symbian"],
      arr2: ["Samsung", "Apple", "Google", "OnePlus"],
      //btn1: ["JOIN US", "SETTINGS", "LOGIN", "CONTACT US", "SEARCH", "HELP", "HOME", "DOWNLOAD"],
      name: "Harshit Gakhar",
      location: "Bangalore",
      description: "Full stack developer",
      skills: ["html", "css", "bootstrap", "javascript", "react"],
      //colors: ["purple ", "indigo ", "plum", "blue", "green ", "yellow ", "orange ", "red "],
      collect: [{ btn: "JOIN US", color: "purple" }, { btn: "SETTINGS", color: "indigo" }, { btn: "LOGIN", color: "plum" }, { btn: "CONTACT US", color: "blue" }, { btn: "SEARCH", color: "green" }, { btn: "HELP", color: "yellow" }, { btn: "HOME", color: "orange" }, { btn: "DOWNLOAD", color: "red" }]
    }
  }
  render() {
    let ad = this.state.collect.map(a => {
      return <Button items={a.btn} items2={a.color} />
    })
    return (
      <div>
        <Show1 items={this.state} />
        <div className="row w-25">
          {ad}
        </div>
        {/* <div className="row mt-5"> 
          <div className="col-xl-1"><Button items={this.state.btn1[0]} items2={this.state.colors[0]}/></div>
          <div className="col-xl-1"><Button items={this.state.btn1[1]} items2={this.state.colors[1]}/></div>
      </div>
      <div className="row mt-2"> 
          <div className="col-xl-1"><Button items={this.state.btn1[2]} items2={this.state.colors[2]}/></div>
          <div className="col-xl-1"><Button items={this.state.btn1[3]} items2={this.state.colors[3]}/></div>
      </div>
      <div className="row mt-2"> 
          <div className="col-xl-1"><Button items={this.state.btn1[4]} items2={this.state.colors[4]}/></div>
          <div className="col-xl-1"><Button items={this.state.btn1[5]} items2={this.state.colors[5]}/></div>
      </div>
      <div className="row mt-2"> 
          <div className="col-xl-1"><Button items={this.state.btn1[6]} items2={this.state.colors[6]}/></div>
          <div className="col-xl-1"><Button items={this.state.btn1[7]} items2={this.state.colors[7]}/></div>
      </div>
      
       */}
        <Card items={this.state} />
      </div>
    );
  }
}


export default App;

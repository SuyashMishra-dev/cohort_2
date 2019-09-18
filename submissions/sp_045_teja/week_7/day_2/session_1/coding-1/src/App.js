import React from 'react';
import logo from './logo.svg';
import './App.css';
import Operating from './components/A1/operating';
import Button from './components/A2/buttons'
import Card from './components/A3/card';

class App extends React.Component {
  constructor(props){
  super(props);

  this.state = {
    os: ["Android", "iOS", "Windows Phone", "BlackBerry"],
    manufacturers: ["Samsung", "Huawei", "Apple", "Nokia"],
    labels: ['JOIN US', 'SETTINGS', 'LOGIN', 'CONTACT US', 'SEARCH', 'HELP', 'HOME', 'DOWNLOAD'],
    colors: ['blue', 'lightblue', 'yellow', 'red', 'green', 'purple', 'pink', 'brown'],

    data : {
      name: 'RICKY PARK',
        location: 'NEW YORK',
        description: 'User interface designer and front end developer',
        skills: ['UI/UX', 'FONT END DEVELOPER', 'HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'NODE']
    }
  }
  }



render() {
  return(
    <div>
      <h1>Mobile Operating Systems</h1>
      <Operating Operating={this.state.os} />
      <h1>Mobile Manufacturers</h1>
      <Operating Operating={this.state.manufacturers} />
      <Button items={this.state} />
      <Card details={this.state} />
    </div>
  )
}
}

export default App;

import React from 'react';
import './App.css';
import Profile from './components/profile';
import Button from './components/button';
import List from './components/list';

class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    os: ["Android", "BlackBerry", "iOS", "Windows Phone"],
    mm: ["Samsung", "HTC", "Apple", "Nokia"],
    labels: ['JOIN US', 'SETTINGS', 'LOGIN', 'CONTACT US', 'SEARCH', 'HELP', 'HOME', 'DOWNLOAD'],
    colors: ['blue', 'lightblue', 'orange', 'red', 'green', 'purple', 'pink', 'olive'],

    data : {
        name: 'Ricky Park',
        location: 'NEW YORK',
        description: 'User interface designer and front end developer',
        skills: ['UI/UX', 'Front End Development', 'HTML', 'CSS', 'JavaScript', 'React', 'Node']
      }
    }
  }

render() {
  return(
    <div>
      <h1>Mobile Operating Systems</h1>
      <List List={this.state.os} />
      <h1>Mobile Manufacturers</h1>
      <List List={this.state.mm} />
      <Button items={this.state} />
      <Profile details={this.state} />
    </div>
  )
}
}

export default App;
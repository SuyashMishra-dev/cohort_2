import React from 'react';
import './App.css';
import MobileOs from './components/A1/MobileOs';
import Button from './components/Buttons/Buttons';
import Card from './components/A3/card';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      os:['Android','Blackberry','Iphone','Windows'],
      manufacturers:['Samsung','HTC','MIcromax','Apple'],
      data : {
        name:"Ricky Park",
        location:"New York",
        description:"UI designer and Front End Developer",
        skills:['UI/UX','Front End Development','HTML','css','Javascript','React','Node']
      }
    }
  }

  render() {
      return (
        <div>
          <h1>Mobile Operating System</h1>
          <MobileOs list={this.state.os} />
          <h1>Mobile Manufacturers</h1>
          <MobileOs list={this.state.manufacturers} />
          <div>
            <Button color="red" label="Contact Us" />
            <Button color="green" label="Download" />
          </div>
          <div>
            <Button color="blue" label="Help" />
            <Button color="orange" label="Home" />
          </div>
          <div>
            <Button color="gray" label="Join Us" />
            <Button color="black" label="Login" />
          </div>
          <div>
            <Button color="pink" label="Search" />
            <Button color="brown" label="Setting" />
          </div>
          <br />
          <Card data={this.state.data}/>
        </div>
       
      )
  }
}


export default App;

import React from 'react';
import './App.css';
import Os from './components/Os';
import Buttons from './components/Buttons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operatingSystems : {
        name: ['Android', 'Blackberry', 'iPhone', 'Windows Phone'] 
      },
      manufacturers: {
        name: ['Samsung', 'HTC', 'Micromax', 'Apple']
      },
      buttons: {
        name: ['JOIN US', 'SETTINGS', 'LOGIN', 'CONTACT US', 'SEARCH', 'HELP', 'HOME', 'DOWNLOAD'],
        color: ['blue', 'gray', 'orange', 'red', 'green', 'purple', 'pink', 'brown']
      }
    }
  }
  render() {
    return (
      <div>
        <Os name={this.state.operatingSystems.name} header={'Mobile Operating System'} />
        <Os name={this.state.manufacturers.name} header={'Mobile Manufacturers'} />

        <Buttons name={this.state.buttons.name} color={this.state.buttons.color}/>
      </div>
    );
  }
  
}

export default App;

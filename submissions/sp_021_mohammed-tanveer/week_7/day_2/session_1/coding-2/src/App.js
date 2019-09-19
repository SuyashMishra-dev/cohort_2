import React from 'react';
import './App.css';
import List from './components/List';
import Buttons from './components/Buttons';

class App extends React.Component{
  constructor(){
      super();
      this.state = {
        osCompany: 'Mobile Operating System',
        osNames: ['Android','Blckberry','iPhone','Windows Phone'],
        makerCompany: 'Mobile Manufacturers',
        makerName: ['Samsung','HTC','Micromax','Apple'],
        label: ['JOIN US','LOGIN','SEARCH','HOME','SETTINGS','CONTACT US','HELP','DOWNLOAD'],
        color: ['.join','.login','.search','.home','.settings','.contact','.help','.download']
      }
  }

  render(){
      return(
          <div>
            <div>
                <List allHeading={this.state.osCompany} allNames={this.state.osNames}/>
            </div>

            <div>
                <List allHeading={this.state.makerCompany} allNames={this.state.makerName}/>
            </div>

            <div>
                {this.state.label.map(allLabels => {
                    
                    return(<Buttons nameLabel={allLabels}/>);
                })}
            </div>

          </div>
      )
  }

}

export default App;

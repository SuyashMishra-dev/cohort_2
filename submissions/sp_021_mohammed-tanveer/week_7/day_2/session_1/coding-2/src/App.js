import React from 'react';
import './App.css';
import List from './components/List';
import Buttons from './components/Buttons';
import styles from './components/mystyle.module.css'
import Intro from './components/Intro';

class App extends React.Component{
  constructor(){
      super();
      this.state = {
        osCompany: 'Mobile Operating System',
        osNames: ['Android','Blckberry','iPhone','Windows Phone'],
        makerCompany: 'Mobile Manufacturers',
        makerName: ['Samsung','HTC','Micromax','Apple'],
        buttons: [
            {label: 'JOIN US', color: 'join'},
            {label: 'LOGIN', color: 'login'},
            {label: 'SEARCH', color: 'search'},
            {label: 'HOME', color: 'home'},
            {label: 'SETTINGS', color: 'settings'},
            {label: 'CONTACT US', color: 'contact'},
            {label: 'HELP', color: 'help'},
            {label: 'DOWNLOAD', color: 'download'}
        ], 
        profile: {name: 'Mohammed Tanveer', location: 'BANGALORE', description: 'User interface designer and front-end developer', skills: ['UI/UX', 'HTML', 'CSS', 'JavaScript', 'React', 'Node']}
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
                {this.state.buttons.map(buttonData => {

                    return(<Buttons allLabels={buttonData.label} allColors={buttonData.color} />);
                })}
            </div>

            <div>
                <Intro allProfile={this.state.profile}/>
            </div>

          </div>
      )
  }

}

export default App;

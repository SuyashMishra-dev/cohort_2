import React from 'react';
import './App.css';
import MobileData from './components/Data.js'
import Buttons from './components/Button.js'
import Card from './components/Card'

class Profile extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      os : ["Android","Blackberry","iPhone","Windows Phone"],
      manufacturer : ["Samsung", "HTC", "Micromax","Apple"],
      page : {
        names:"Ricky Park",
        country:"NEW York",
        profession:"User interface designer and frond-end developer",
        skills:["UI/UX","Front End Development","HTML","CSS","Javascript","React","Node"]
      }
    }
  }

  render(){
    return (  
      < div>
        <h1>Mobile Operating System</h1>
        <MobileData list={this.state.os}/>

        <h1>Mobile Manufactorers</h1>
        <MobileData  list={this.state.manufacturer}/>
        
        <div>
          <Buttons change={{color:"#61dafb", label:"JOIN US"}}/>
          <Buttons change={{color:"#90c7d6", label:"SETTINGS"}}/>
        </div>
        <div>
          <Buttons change={{color:"#ebab21", label:"LOGIN"}}/>
          <Buttons change={{color:"#b31f1f", label:"CONTACT US"}}/>
        </div>
        <div>
          <Buttons change={{color:"#3c6b1c", label:"SEARCH"}}/>
          <Buttons change={{color:"#302b75", label:"HELP"}}/>
        </div>
        <div>
          <Buttons change={{color:"#cc3dad", label:"HOME"}}/>
          <Buttons change={{color:"#241f6e", label:"DOWNLOAD"}}/>
        </div>
        <div>
          <Card infoCard={this.state.page}/>
        </div>    
      </ div>
    );
  }
}

export default Profile;

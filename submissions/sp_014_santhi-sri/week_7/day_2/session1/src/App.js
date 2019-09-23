import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mobile from './components/mobile'
import Button from './components/button'
import Card from './components/card'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      operating : ["Android","Blackberry","iphone","WindowsPhone"],
      manufacture :["Samsung","HTC","Micromax","Apple"],
      data:[
        {
          name:"JOIN US",
          color:"blue"
        },
        {
          name : "SETTINGS",
          color : "grey"
        },
       {
          name :"LOGIN",
          color : "yellow"
        },
        {
          name :"CONTACTUS",
          color :"red"
        },
         {
          name :"SEARCH",
          color :"green"
        },
         {
          name:"HELP",
          color :"purple"
        },
        {
          name : "HOME",
          color :"pink"
        },
       {
          name :"DOWNLOAD",
          color :"brown"
        }   
        ],
       data1: [
        {
          name : "Rickey Park",
          location: " NEW YORK",
          description : "User Interface designer and frontend developer",
          skills :["UI/Ux","Front End Developement","HTML","CSS","JavaScript","React","Node"]
        }
      ]
    }
  }
  render (){
    return (
      <div>
        <div>
          <Mobile head = {'Mobile OperatingSystems'} mobileData = {this.state.operating}/>
          <Mobile head = {'Mobile Manufacturers'} mobileData = {this.state.manufacture}/>
          <div>
          {this.state.data.map(item=>{
            return(<Button buttondata = {item.name} style = {item.color}/>)
          })}  
          </div>
          <div>
            <Card name = {this.state.data1[0].name} location = {this.state.data1[0].location} des = {this.state.data1[0].description} skills = {this.state.data1[0].skills}/>
          </div>    
        </div>      
      </div>
    )
  }  
  
}

export default App;

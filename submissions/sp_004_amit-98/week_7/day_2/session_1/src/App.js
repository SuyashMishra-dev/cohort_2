import React from 'react';
import './App.css';
import Mobile from './mobile.js'
import Button from './button.js'
import Card from './card.js'

class App extends React.Component{
  render(){
  var arr1=[{
     obj:'Mobile Operating System',
     item:"Android"
   },
   {
    item:"Blackberry"
  },
  {
    item:"iPhone"
  },
  {
    item:"Windows Phone"
  }]
  var arr2=[{
    obj:'Mobile Manufactures',
    item:"Android"
  },
  {
   item:"Blackberry"
 },
 {
   item:"iPhone"
 },
 {
   item:"Windows Phone"
 }]

  var arr = [{
      label: 'JOIN US',
      color: 'red'
    },
    {
      label: 'CONTACT US',
      color: 'blue'
    },
    {
      label: 'LOGIN',
      color: 'green'
    },
    {
      label: 'CONTACT US',
      color: 'pink'
    },
    {
      label: 'SEARCH',
      color: 'orange'
    },
    {
      label: 'HELP',
      color: 'grey'
    },
    {
      label: 'HOME',
      color: 'lightseagreen'
    },
    {
      label: 'DOWNLOAD',
      color: 'yellow'
    }]
    var arr3=[
      {
        skill:'UI/UX'
      },
      {
        skill:'Front End Development'
      },
      {
        skill:'HTML'
      }
    ]

  
  return (
    <div>
  {
    arr1.map(item=>{
      return(<Mobile item1={item.item} obj={item.obj}/>)
    })
    
  }
  {
    arr2.map(item=>{
      return(<Mobile item1={item.item} obj={item.obj}/>)
    })
    
  }
   {
        arr.map(item=>{
        return(<Button label1={item.label} colors1={item.color}/>)
      })}
      <div>
        <Card/>
      </div>
    </div>
  );
}
}

export default App;
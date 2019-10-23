import React from 'react';
import Obj from './objects'
import Btn from './button'
// import App from './App'
import './App.css';

function App() {
  return(
    <div>
    <Obj
    list ={{Header:"Mobile Operating System", name1:"Android", name2: "blackberry", name3:"iPhone", name4:"Windows Phone"}} 
    />
    <Obj 
   list= {{Header:"Mobile Manufacturers", name1:"Samsung", name2: "Apple", name3:"Micromax", name4:"Apple"}} 
   />
   <Btn 
   list ={{label1:"JOIN US", color1:"blue"}} />
   <Btn 
   list ={{label1:"LOGIN", color1:"orange"}} />
   <Btn 
   list ={{label1:"SEARCH", color1:"yellow"}} />
   <Btn 
   list ={{label1:"HOME", color1:"pink"}} />
   <Btn 
   list ={{label1:"SETTINGS", color1:"blue"}} />
   <Btn 
   list ={{label1:"CONTACTS", color1:"yellow"}} />
   <Btn 
   list ={{label1:"HELP", color1:"green"}} />
   <Btn 
   list ={{label1:"DOWNLOAD", color1:"blue"}} />


   </div>
  )
}
export default App;


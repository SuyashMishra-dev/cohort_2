import React from 'react';
import logo from './logo.svg';
import './App.css';
 import Button from './button.js'
import Mobile from './Mobile.js';
import List from "./List.js";
import List1 from "./color.js";
import Card1 from './card1';

 
const mob= List.map(items => <Mobile key={items.id} list={items} />)
const but=List1.map(value=> <Button key={value.id} list1={value}/>)
function App() {
    return (
      <div>
          {mob}
          {but}
         <div> 
             <Card1/>
         </div>
      </div>
      

      
        );
     }
  
 

export default App;

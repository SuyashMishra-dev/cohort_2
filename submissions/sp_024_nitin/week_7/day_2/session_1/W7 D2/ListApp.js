import React from 'react';
import List1 from './List1';
import List2 from './List2';

const OS = {
  heading : "Mobile Operating System",
  l1: "Android",
  l2: "Blackberry",
  l3: "iPhone",
  l4: "Windows Phone"};

const MF = {
  heading: "Mobile Manufacturers",
  l1: "Samsung", 
  l2: "HTC", 
  l3: "Micromax", 
  l4: "Apple"};

const Format = [
   
    {color: 'blue', label: 'Join Us'},
    {color: '#43AB92', label: 'Settings'}, 
    {color: '#F75F00', label: 'Login'}, 
    {color: '#C70D3A', label: 'Contact Us'}, 
    {color: '#91B029', label: 'Search'}, 
    {color: 'indigo', label: 'Help'}, 
    {color: '#FF3F98', label: 'Home'}, 
    {color: '#672F2F', label: 'Download'}

];
  
  
    

function ListApp() {
    return (
      <div>
        <List1 obj1 = {OS} obj2 = {MF}/>
        <List2 obj3 = {Format}/>
      </div>
    );
  }
  
  export default ListApp;
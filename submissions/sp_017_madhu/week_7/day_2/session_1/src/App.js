import React from 'react';
import List from './component/Aone/List';
import Button from './component/Atwo/Button';
import Card from './component/Athree/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <List head='Mobile Operating System' first='Android' second='Blackberry' third='iPhone' fourth='Windows Phone' />

      <List head='Mobile Macufacturers' first='Samsung' second='HTC' third='Micromax' fourth='Apple Phone' />

      <Button button1=" Join US" clr1="blue" button2="Settings" clr2="grey"/>
      <Button button1=" Login" clr1="yellow" button2="Contact US" clr2="red"/>
      <Button button1=" Search" clr1="green" button2="Help" clr2="navy"/>
      <Button button1=" Home" clr1="pink" button2="Download" clr2="brown"/>
      <Card headerTwo="Ricky Park" headerfour="NEW YORK" headerNext="User interface designer and" headerNew="front-end developer" mess="Message" foll="Following" skill="Skills" ux="UI/UX" front="Front End Development" front1="HTML" front2="CSS" front3="JavaScript" front4="React" front5="Node"/>

    </div>  
  )
}

export default App;

import React from 'react';
import Lists from './components/a1/Lists';
import Buttons from './components/a2/Buttons';
import Card from './components/a3/Card'

function App() {
  return (
    <div className="App">
      <Lists head="Mobile Operating System" f="Android" s="Blackberry" t="iPhone" fth="Windows Phone"/>
      <Lists head="Mobile Manufacturers" f="Samsung" s="HTC" t="Micromax" fth="Apple"/>
      <Buttons b1="JOIN US" b2="SETTINGS" clr1="blue" clr2="gray"/>
      <Buttons b1="JOIN US" b2="SETTINGS" clr1="yellow" clr2="red"/>
      <Buttons b1="JOIN US" b2="SETTINGS" clr1="green" clr2="purple"/>
      <Buttons b1="JOIN US" b2="SETTINGS" clr1="pink" clr2="brown"/>
      <Card s1="UNIX" s2="Front End Development" s3="HTML" s4="CSS" s5="Javascript" s6="React" s7="Node" mess ="MESSAGE" skills="SKILLS" foll="FOLLOWING" src="https://via.placeholder.com/150" name="Ricky Park" city="NEW YORK" pos="User interface designer and front-end developer" />
    </div>
  );
  }
export default App;

import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import List from "./List"
import Button from "./button"


class App extends React.Component {
  render() {
    return (
      <div>

         <List head="Mobile Operating System" l1="Android" l2="Blackberry" l3="iphone" l4="Windows phone" />
         <List head="Mobile Manufacturers" l1="Samsung" l2="HTC" l3="Micromax" l4="Apple" />
          <Button b1="JOIN US" b2="SETTINGS" color1="blue" color2="#ADD8E6" />
            <Button b1="LOGIN" b2="CONTACT US" color1="yellow" color2="red" />
             <Button b1="SEARCH" b2="HELP" color1="green" color2="purple" />
              <Button b1="HOME" b2="DOWNLOAD" color1="pink" color2="brown" />

        




      </div>
    )
  }
}

export default App;

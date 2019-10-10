import React from 'react';
import './App.css';
import Mobile from "./components/mobile"
import Buttons from "./components/buttons"
import Card from "./components/card"

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      operatingSystem: ['Android', 'SymbianOS', 'Blackberry', 'iPhone', 'Windows Phone'],
      manufacturers: ['Samsung', 'HTC', 'MICROMAX', 'APPLE'],
      button: [{ color: "blue", label: "Join Us" }, { color: "grey", label: "SETTINGS" },
      { color: "yellow", label: 'LOGIN' }, { color: "red", label: "CONTACT US" }, { color: "green", label: "SEARCH" }, { color: "purple", label: "HELP" },
      { color: "pink", label: "HOME" }, { color: "orange", label: "DOWNLOAD" }],
      infocard:
      {
        name: "Ricky Park",
        location: "NEW YORK",
        description: "User Interface designer and front-end Developer",
        SKILLS: ['UI/UX', 'FRONT-END DEVELOPMENT', 'HTML', 'CSS', 'Javascript', 'React', 'Node']
      }
    }
  }
  render() {
    return (
      <div>
        <Mobile mobileInfo={{
          os: this.state.operatingSystem,
          man: this.state.manufacturers
        }} />
        <Buttons Buttondata={this.state.button} />
        <Card Cardinfo={this.state.infocard} />
      </div>
    )
  }
}



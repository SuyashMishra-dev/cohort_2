import React from 'react';
//import logo from './logo.svg';
import './App.css';
// import Search from './Join.js'
// import Setting from './Setting.js'

class Join extends React.Component {
  render() {
      return <div>
              <button className="btn">JOIN US</button>
          </div>    
  }
}

class Setting extends React.Component {
  render() {
      return <div>
              <button className="btn btnSetting">Settings</button>
          </div>      
  }
}

class Login extends React.Component {
  render() {
      return <div>
              <button className="btn  yellow">LOGIN</button>
          </div>    
  }
}

class Contactus extends React.Component {
  render() {
      return <div>
              <button className="btn btnSetting darkRed">CONTACT US</button>
          </div>      
  }
}

class Search extends React.Component {
  render() {
      return <div>
          <button className="btn  green">SEARCH</button>
          </div>   
  }
}

class Help extends React.Component {
  render() {
      return <div>
              <button className="btn btnSetting blue">HELP</button>
          </div>
      
  }
}

class Home extends React.Component {
  render() {
      return <div>
              <button className="btn  pink">HOME</button>
          </div>
      
  }
}

class Download extends React.Component {
  render() {
      return <div>
              <button className="btn btnSetting chocolate">DOWNLOAD</button>
          </div>
      
  }
}

class Image extends React.Component {
  render() {
      return <div>
              <img src="https://s3.scoopwhoop.com/anj/sw/e79a3d06-3809-42d4-a1f1-07c05629f9d2.jpg" className="image"></img>
              <h3 className="white">Sudha Murthy</h3>
              <h4 className="white">India</h4>
              <p className="white">Chairperson, Infosys Foundation</p>
              <div className="flex buttons">
                <button>Message</button>
                <button>Following</button>
              </div>
              
          </div>
      
  }
}




function App() {
  return (
    <div>
      <h1>Mobile Operating System</h1>
    <ul>
        <li>Android</li>
        <li>Blackberry</li>
        <li>iPhone</li>
        <li>Windows Phone</li>
    </ul>
    <h1>Mobile manufactures</h1>
    <ul>
        <li>Samsung</li>
        <li>HTC</li>
        <li>Micromax</li>
        <li>Apple</li>
    </ul>

    <div className="flex mt">
        <Join/>
        <Setting/>
    </div>
     <div className="flex mt">
        <Login/>
        <Contactus/>
    </div> 
    <div className="flex mt">
        <Search/>
        <Help/>
    </div> 
    <div className="flex mt">
        <Home/>
        <Download/>
    </div>
    

    <div className="bg"> 
          <Image/>
    </div>
    </div>
  );
}

export default App;

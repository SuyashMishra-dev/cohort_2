import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Buttons from './components/Buttons';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headings: ["Mobile Operating Systems", "Mobile Manufacturers"],
      os: ["Android", "iOS", "Windows Phone", "BlackBerry"],
      manufacturers: ["Samsung", "Huawei", "Apple", "Nokia"],
      labels: ['JOIN US', 'SETTINGS', 'LOGIN', 'CONTACT US', 'SEARCH', 'HELP', 'HOME', 'DOWNLOAD'],
      colors: ['blue', 'lightblue', 'yellow', 'red', 'green', 'purple', 'pink', 'brown'],
      data : {
        name: 'Karthik',
        location: 'Bangalore',
        description: 'Full Stack Developer',
        skills: ['HTML', 'CSS', 'JS', 'REACT']
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Mobile Operating Systems</h1>
        <List listItems={this.state.os} />
        <h1>Mobile Manufacturers</h1>
        <List listItems={this.state.manufacturers} />
        <Buttons items={this.state} />
        <Card properties={this.state}/>
      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

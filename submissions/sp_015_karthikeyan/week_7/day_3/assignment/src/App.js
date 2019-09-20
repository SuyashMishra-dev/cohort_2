import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';

let sw, t;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopWatch : false,
      timer: false,
      counter : 0
    };
  }

  createInterval = () => {
    if(this.state.stopWatch) {
      sw = setInterval(() => {
        this.setState({counter: this.state.counter + 1})
      }, 1000);
    }
    else clearInterval(sw);

    if(this.state.timer) {
      t = setInterval(() => {
        this.setState({counter: this.state.counter - 1})
      }, 1000);
    }
    else clearInterval(t);
  }

  swSwitch = () => {
    this.setState({
      counter: 0,
      stopWatch: !this.state.stopWatch,
    })
    this.createInterval();
  }


  tSwitch = () => {
    this.setState({
      counter: 300,
      timer: !this.state.timer
    })
    this.createInterval();
  }

  render = () => {
    return (
      <div>
        <p>Stopwatch</p>
        <Stopwatch data={this.state}/>
        <Stopwatch data={this.state}/>
        <button onClick={this.tSwitch}>Timer</button>
        <button onClick={this.swSwitch}>SW</button>
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

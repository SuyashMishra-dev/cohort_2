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
      swCounter : 0,
      tCounter : 60
    };
  }

  createInterval = () => {
    if(this.state.stopWatch) {
      sw = setInterval(() => {
        this.setState({swCounter: this.state.swCounter + 1})
      }, 1000);
    }
    else clearInterval(sw);

    if(this.state.timer) {
      t = setInterval(() => {
        this.setState({tCounter: this.state.tCounter - 1})
      }, 1000);
    }
    else clearInterval(t);
  }

  swSwitch = () => {
    this.setState({
      stopWatch: !this.state.stopWatch,
    })
    this.createInterval();
  }

  swReset = () => {
    this.setState({
      swCounter: 0,
      stopWatch: false
    })
    this.createInterval();
  }

  tSwitch = () => {
    console.log(this.state.timer)
    let val = document.querySelector("input").value
    if(this.state.timer && val) {
      this.setState({
        tCounter: val
      })
    }
    this.setState({
      timer: !this.state.timer
    })
    this.createInterval();
  }

  tReset = () => {
    this.setState({
      tCounter: 60,
      timer: false
    })
    this.createInterval();
  }

  render = () => {  
    if(this.state.tCounter == 0) {
      this.tReset();
      alert("Time's up");
    }

    return (
      // <div>
      //   <Stopwatch data={this.state}/>
      //   {/* <Stopwatch data={this.state}/> */}
      //   {/* <button onClick={this.tSwitch}>Timer</button> */}
      //   <button onClick={this.swSwitch}>SW</button>
      // </div>
      

      <div className = "container">
        <div className = "row text-center">
          <div className = "col">
            <p className = "display-3">StopWatch</p>
            <Stopwatch data={this.state} />
            <button onClick={this.swSwitch} className = "btn btn-primary m-1">Toggle</button>
            <button onClick={this.swReset} className = "btn btn-primary m-1">Reset</button>
          </div>
          <div className = "col">
            <p className = "display-3">Timer</p>
            <Timer data={this.state} />
            <input placeholder = "Enter time in seconds" className = "form-control text-center"></input>
            <button onClick={this.tSwitch} className = "btn btn-primary m-1">Toggle</button>
            <button onClick={this.tReset} className = "btn btn-primary m-1">Reset</button>
          </div>
        </div>
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

import React from 'react';
import './App.css';
// import Stopwatch from './components/stopwatch';
// import Timer from './components/timer';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {Container,Row,Col} from 'react-bootstrap'
import Stopwatch from './components/classComponents/Stopwatch';
import Timer from './components/classComponents/Timer'

class App extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   count: 0,
    //   splitArr: [],
    //   start: true,
    //   x: null,
    //   timer: false,
    //   timerCount: 300,
    //   timerStart: true,
    //   y: null
    // }
  }

  // timerSwitch = () => {
  //   this.setState({
  //     timer: true
  //   })
  // }

  // stopwatchSwitch = () => {
  //   this.setState({
  //     timer: false
  //   })
  // }

  // toggleStopWatch = () => {
  //   if (this.state.start) {
  //     this.setState({
  //       x: setInterval(() => {
  //         this.setState({
  //           count: this.state.count + 1
  //         })
  //         // clockDisplay.textContent = displayTime(count);
  //       }, 1000)
  //     })
  //   } else {
  //     clearInterval(this.state.x)
  //   }

  //   this.setState({
  //     start: !this.state.start
  //   })

  // }

  // toggleTimer = () => {
  //   if (this.state.timerStart) {
  //     this.setState({
  //       y: setInterval(() => {
  //         this.setState({
  //           timerCount: this.state.timerCount - 1
  //         })
  //         // clockDisplay.textContent = displayTime(count);
  //       }, 1000)
  //     })
  //   } else {
  //     clearInterval(this.state.y)
  //   }
  //   this.setState({
  //     timerStart: !this.state.timerStart
  //   })
  // }

  // resetTimer = () => {
  //   this.setState({
  //     timerCount: 300
  //   })
  // }

  // resetWatch = () => {
  //   this.setState({
  //     count: 0
  //   })
  // }
  // // componentDidMount(){
  // //   this.toggleTimer();
  // // }
  // setTimerInput = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     timerCount: Number(e.target.value)
  //   })
  // }

  // onTimerZero = () => {
  //   alert('timer done');
  //   this.resetTimer();
  //   clearInterval(this.state.y);
  //   this.setState({
  //     timerStart: !this.state.timerStart
  //   })
  // }

  render() {
    // if (this.state.timerCount == 0) {
    //   this.onTimerZero();
    // }
    // let element = null;
    // this.state.timer ?
    //   element = <Timer resetTimer={this.resetTimer}
    //     toggleTimer={this.toggleTimer}
    //     value={this.state.timerCount}
    //     setTimerInput={(e) => { this.setTimerInput(e) }} />
    //   :
    //   element = <Stopwatch resetWatch={this.resetWatch}
    //     toggle={this.toggleStopWatch}
    //     count={this.state.count} />;
    return (
      <div className="App">
        {/* <div>
          <span onClick={() => { this.timerSwitch() }}>Timer</span>
          <span onClick={() => { this.stopwatchSwitch() }}>Stopwatch</span>
        </div>
        {element} */}
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="2">
              
            </Col>
            <Col md="auto">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="timer" title="Timer">
                <Timer />
              </Tab>
              <Tab eventKey="stopWatch" title="Stop Watch">
                <Stopwatch />
              </Tab>

            </Tabs>
            </Col>
            <Col xs lg="2">
              
            </Col>
          </Row>
        </Container>
        
      </div>
    )
  }
}
export default App;

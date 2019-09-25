import React from 'react';
import logo from './logo.svg';
import './App.css';

import Card from './Card'

class App extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   current: {
    //     name: '',
    //     age: '',
    //     dob: '',
    //     semester: '',
    //     branch: '',
    //     grade: '',
    //     no: ''
    //   },
    //   saved: []
    // }
    this.state = {
      name: '',
      age: '',
      dob: '',
      semester: '',
      branch: '',
      grade: '',
      no: '',
      saved: []
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    this.setState({saved: [...this.state.saved, this.state]});
    e.preventDefault();
  }

  removeStudent = (query) => {
    let temp = this.state.saved;
    let filteredArr = temp.filter(ele => ele.name != query);
    this.setState({
      saved: filteredArr
    })
  }

  render() {

    return(
      <div className="container">
        <div className="row">
          <form onSubmit={(e) => this.handleSubmit(e)} className="col-md-6">
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" className="form-control" onChange={(e) => this.handleChange(e)} value={this.state.name}></input>
            </div>
            <div className="form-group">
              <label>Age</label>
              <input type="text" name="age" className="form-control" onChange={(e) => this.handleChange(e)} value={this.state.age}></input>
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" name="dob" className="form-control" onChange={(e) => this.handleChange(e)} value={this.state.dob}></input>
            </div>
            <div className="form-group">
              <label>Semester</label>
              <input type="number" name="semester" max='8' className="form-control" onChange={(e) => this.handleChange(e)} value={this.state.semester}></input>
            </div>
            <div className="form-group">
              <label>Branch</label>
              <input type="text" name="branch" className="form-control" onChange={(e) => this.handleChange(e)} value={this.state.branch}></input>
            </div>
            <div className="form-group">
              <label>Grade</label>
              <input type="text" name="grade" className="form-control" onChange={(e) => this.handleChange(e)} value={this.state.grade}></input>
            </div>
            <div className="form-group">
              <label>Badge No.</label>
              <input type="text" name="no" className="form-control" onChange={(e) => this.handleChange(e)} value={this.state.no}></input>
            </div>
            <input type="submit" className="btn btn-primary"></input>
          </form>
          <div className="col-md-4 offset-1">
            {/* {this.state.saved ? (
              this.state.saved.map(ele => {
                return <Card data={ele} />
              })
            ) : 
            (
              <div></div>
            )} */}
            {this.state.saved ? (
              this.state.saved.map(ele => {
                return <Card data={ele} func={(query) => this.removeStudent(query)}/>
              })
            ) : 
            (
              <div></div>
            )}
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

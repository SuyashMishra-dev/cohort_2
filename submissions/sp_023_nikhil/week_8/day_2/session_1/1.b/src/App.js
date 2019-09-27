import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: [],
        age: [],
        dob: [],
        semester: [],
        branch: [],
        grades: [],
        badge: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value,
      age: event.target.value,
      // dob: event.target.dob,
      // semester: event.target.semester,
      // branch: event.target.branch,
      // grades: event.target.grades,
      // badge: event.target.badge
    });
     console.log(this.state.name)
  }

  handleSubmit(event) {
    event.preventDefault();
    //console.log(this.state.name,this.state.age,this.state.dob,this.state.semester,this.state.branch,this.state.grades,this.state.badge)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:</label>
        <input type="text" value={this.state.name} onChange={this.handleChange} /> <br />
        <label>Age:</label>
        <input type="number" value={this.state.age} onChange={this.handleChange} /> <br />
        <label>DoB:</label>
        <input type="date" dob={this.state.dob} onChange={this.handleChange} /> <br />
        <label>Semester:</label>
        <input type="number" semester={this.state.semester} onChange={this.handleChange} /> <br />
        <label>Branch:</label>
        <input type="text" branch={this.state.branch} onChange={this.handleChange} /> <br />
        <label>Grades:</label>
        <input type="number" grades={this.state.grades} onChange={this.handleChange} /> <br />
        <label>Badge:</label>
        <input type="number" badge={this.state.badge} onChange={this.handleChange} /> <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;

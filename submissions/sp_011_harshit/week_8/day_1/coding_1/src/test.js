import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";

const UserList = props => (
  <h5 key={props.id.value}>name: {props.name.first}</h5>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=5")
      .then(res => {
        const data = res.data.results;
        console.log(data);
        this.setState({
          data: data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        {this.state.data.map((item, index) => {
          console.log(item);
          return <UserList {...item} />;
        })}
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

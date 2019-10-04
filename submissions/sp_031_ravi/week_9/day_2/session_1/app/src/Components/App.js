import React, { Component } from "react";
import Counter from "./Counter";


class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>React - Redux</h1>
        <Counter />
      </div>
    );
  }
}

export default App;

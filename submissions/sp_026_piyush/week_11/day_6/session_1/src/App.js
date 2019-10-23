import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import Home from './components/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <BrowserRouter>
        <Link className="btn btn-success" to="/" >Home</Link>
        <Route path="/" exact component={Home}></Route>
      </BrowserRouter>
    )
  }
}

export default App;
import React from "react";
import {BrowserRouter} from "react-router-dom";
import Navbar from './components/Navbar.js'
import Routes from './components/Route.js'

class App extends React.Component {
  render() {
    return (
     
      <BrowserRouter>
          <Navbar/>
          <Routes/>
      </BrowserRouter>
    );
  }
}
export default App;

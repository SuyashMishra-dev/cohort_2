import React from "react";
import {BrowserRouter} from "react-router-dom";
import Navbar from './components/navbar.js'
import Routes from './components/route.js'

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

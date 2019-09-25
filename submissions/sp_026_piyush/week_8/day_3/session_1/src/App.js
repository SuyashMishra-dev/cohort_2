// import React from 'react';
// import { Route, BrowserRouter, Link } from "react-router-dom";

// const Home = () => {
//   return <div>This is the home page!</div>
// };

// const About = () => {
//   return <div>This is the about page!</div>
// };

// const Contact = () => {
//   return <div>This is the contact page!</div>
// }

// class App extends React.Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <React.Fragment>
//           <Link to="/">Home</Link>
          
//           <Link to="/about">About</Link>

//           <Link to="/contact">Contact</Link>

//           <Route path="/" exact component={Home} />

//           <Route path="/about" component={About} />

//           <Route path ="/contact" component={Contact} />

//         </React.Fragment>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;

// import React, {Component} from 'react';
// import { Route, BrowserRouter, Link } from "react-router-dom";
// import './App.css'
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Login from './components/Login';
// import Services from './components/Services';


// class App extends Component {
//   render() {
//     return (
//       // <BrowserRouter>
//         <React.Fragment>
//           <Link to="/">Home</Link>
          
//           <Link to="/about">About</Link>

//           <Link to="/contact">Contact</Link>

//           <Link to="/services">Services</Link>

//           <Link to="/login">Login</Link>

//           <Route path="/" exact component={Home} />

//           <Route path="/about" component={About} />

//           <Route path ="/contact" component={Contact} />

//           <Route path="/services" component={Services} />

//           <Route path="/login" component={Login} />
          
//         </React.Fragment>
//       // </BrowserRouter>
//     );
//   }
// }

// export default App;


import React, { Component } from 'react';
// import { Route, BrowserRouter, Link } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
      </React.Fragment>
    );
  }
}

export default App;
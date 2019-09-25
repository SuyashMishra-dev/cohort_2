import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'; 
import Login from './components/Login';
import Services from './components/Services'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='navbar-fixed'>
          <nav className='purple lighten-1'>
            <div className='nav-wrapper container'>
              <Link to='/' className='brand-logo'>Random</Link>
              <ul className='right'>
              <li><Link to='/services'>Services</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              <li><Link to='/login'>Login</Link></li>
              </ul>
            </div>
          </nav>
        </div>
        <div>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
          <Route path='/services' component={Services} />
        </div>
      </BrowserRouter>
    )
  }
}


// import logo from './logo.svg';
// import './App.css';

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

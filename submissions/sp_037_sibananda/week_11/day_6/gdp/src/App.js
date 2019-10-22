import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Home from './Components/Home'
import Display from './Components/display'
function App() {
  return (
    <Router>
    <div className="App">
      <div>
      <Link to ="/home" >Home</Link>
      <Link to ="display"><button>display</button></Link>
      </div>
       <div>
        <Route path="/home" exact render={()=><Home />}/>
        <Route path="/display" render={()=><Display />} />
       </div>

        
    
     </div>
    </Router>

  );
}

export default App;
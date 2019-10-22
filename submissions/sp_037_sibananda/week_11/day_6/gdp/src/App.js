import React from 'react';
import './App.css';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Form from './Components/form'
import Home from './Components/Home'
import Display from './Components/display'
import Data from './Components/data'
function App() {
  return (
    <Router>
    <div>
      <div>
      <Link to ="/home" >Home</Link>
      <Link to ="display"><button className="App">display</button></Link>
      <Link to = "/form"><button className="App">Create</button></Link>
      </div>
       <div>
         <Route path ="/form" render={()=><Form />} />
         <Route path ="/home" render={()=><Data />} />
        <Route path="/home" exact render={()=>< Home/>}/>
        <Route path="/display" render={()=><Display />} />
        {/* <Route path="/Home" exact component = {Home} /> */}

       </div>

        
    
     </div>
    </Router>

  );
}

export default App;
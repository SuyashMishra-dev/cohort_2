import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import './App.css';
import Data from './component/Display/data'
import Home from './component/Create'
import CountryList from './component/Display/country'
import Display from './component/Display/data'

function App() {
  return (        
    <Router>
    <div className="App1">
      <div className="bg-success">
      <Link to ="/" className="bg-danger m-5 ">Home</Link>
      <Link to ="/data"><button>Data</button></Link>
     
      
     
      {/* <Link to ="countryList">dataa</Link> */}
      </div>
       <div>
        <Route path="/" exact render={()=><Home/>}/>
        <Route path="/data"  render={()=><Display />} />
        <Route path='/component/Display/country' render={()=><Home />} />
        {/* <Route path='/home'exact render={()=><Home />} /> */}
       <CountryList />
       </div>

        
    
     </div>
    </Router>

  );
}

export default App;

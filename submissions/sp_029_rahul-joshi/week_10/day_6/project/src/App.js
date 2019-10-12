import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import NameForm from './form'
import Home from './Home'


class App extends Component {
  render() {
    return (
      <React.Fragment>
       <Link to="/">Home</Link>
      <Route path="/" exact component={Home} />

      <Link to="/form"><button>Create</button></Link>
      <Route path="/form" exact component={NameForm} />

      <Link to="/form"><button>Show</button></Link>
      {/* <Route path="/form" exact component={} /> */}
     
      

       
       
      
</React.Fragment>

    );
  }
}

export default App;

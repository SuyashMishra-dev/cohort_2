import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Mac from './component/InternalComponent/Mac';
import iPad from './component/InternalComponent/iPad';
import iPhone from './component/InternalComponent/iPhone';
import Watch from './component/InternalComponent/Watch';
import TV from './component/InternalComponent/TV';
import Music from './component/InternalComponent/Music';
import Support from './component/InternalComponent/Support';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Route exact path="/" component={Mac}/>
      <Route path="/ipad" component={iPad}/>
      <Route path="/iphone" component={iPhone}/>
      <Route path="/watch" component={Watch}/>
      <Route path="/tv" component={TV}/>
      <Route path="/music" component={Music}/>
      <Route path="/support" component={Support}/>
    </BrowserRouter>
  );
}

export default App;

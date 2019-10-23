import React from 'react';
import './App.css';
import Header from "./components/Header"
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Show from "./components/Display"
import Name from "./components/Name"

function App() {
  return (
      <React.Fragment>
        <BrowserRouter>
          <div className="container-fluid">
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/support" component={Contact} />
            <Route path="/Show" component= {Show}  />
            <Route path="/Name:itemId" render={(props)=><Name {...props}/>} />
            <Footer />
          </div>
        </BrowserRouter>
      </React.Fragment>
  );
}

export default App;

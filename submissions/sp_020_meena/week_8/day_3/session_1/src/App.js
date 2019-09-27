import React from 'react';
import {Route, Link,BrowserRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const CourseTemplate = ()=> {
  return (
    <React.Fragment>
      <h1>Courses</h1>
      <ol>
        <li>
          <Link to="/courses/fullstack">Full-Satck developer</Link>
        </li>
        <li>
          <Link to="/courses/andriod">Andriod developer</Link>
        </li>
      </ol>
      <Route path = "/courses/fullstack" render = {() => <Course name="fullstack"/>}/>
      <Route path = "/courses/andriod" render ={() =><Course name = "andriod"/>}/>
    </React.Fragment>
  );
}

const Course = (props)=> {
  if(props.name == "fullstack"){
    return(
      <React.Fragment>
        <h1>Full stack Developer</h1>
        <h3>what will you learn</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Java script</li>
        </ul>
        <Link to = "/courses/fullstack/price"/>price
        <Route path = "/courses/fullstack/price"
        render={() => {
          return (
            <React.Fragment>
              <p> Price is $0 </p>
            </React.Fragment>
          );
        }}
      />
      </React.Fragment>
    )
  }
  if (props.name == "android") {
    return (
      <React.Fragment>
        <h1> Android Development </h1>
        <h3> What you will learn: </h3>
        <ul>
          <li> Java </li>
          <li> Kotlin </li>
          <li> Android Studio </li>
        </ul>
      </React.Fragment>
    );
  }
};


export default class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <BrowserRouter>
           <h1>Welcome To Shine School</h1>
           <div>
             <Link to ="/">Home</Link>
              <br/>
              <Link to ="/about">About Us</Link>
              <br/>
              <Link to ="/contact">Contact Us</Link>
              <br/>
              <Link to ="/course">Courses</Link>
              <br/> 
           </div>
           <Route path = "/" exact component = {Home}></Route>
           <Route path = "/about"component = {About}/>
           <Route path = "/contact"component = {Contact}/>
           <Route path = "/courses"component = {CourseTemplate}/>
        </BrowserRouter>
      </React.Fragment>

    )
  }
}

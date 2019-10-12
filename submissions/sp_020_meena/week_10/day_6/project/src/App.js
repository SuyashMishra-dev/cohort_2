import React from 'react';
import './components/Styles.css';
import Home from "./components/Home"
import {Route, Link,BrowserRouter} from 'react-router-dom';
import Create from "./components/Create";
import Show from "./components/Show";
// import { createStore } from "redux";
// import {Provider} from "react-redux";
// import reducer from "./components/redux/reducer"
// import {Link ,Route,BrowserRotuer} from "react-router-dom";

// const storeList = createStore(reducer);
// console.log("store created ", storeList.getState());

function App() {
  return (
    <div className="App">
      {/* <Provider store = {storeList}> */}
      <React.Fragment>
        <BrowserRouter>
        <h1 className ="head">Cricket Players</h1>
        <Link className = "nav1" to = "/">Home</Link>
        <Link className = "nav1" to = "/creat"><button className = "btn">Create</button></Link>
        <Link to = "/show"><button className = "btn">Show</button></Link>
        <Route path = "/" exact component = {Home}></Route>
        <Route path = "/creat" component = {Create}></Route>
        <Route path = "/show" component = {Show}></Route>
        </BrowserRouter>
      </React.Fragment>
      {/* </Provider> */}
    </div>
  );
}

export default App;

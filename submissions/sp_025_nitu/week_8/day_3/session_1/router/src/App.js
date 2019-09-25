import React from "react";

import "./App.css";
import "./styles.css";
import Navbar from './navbar.js';



// const Contact = () => {
//   return <div>This is the contact page! 
//   </div>;
// };

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
      </div>
    );
  }
}

export default App;

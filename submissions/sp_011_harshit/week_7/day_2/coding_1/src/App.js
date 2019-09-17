import React from 'react';
import logo from './logo.svg';
import './App.css';
import Show1 from './component/Show1'
import Show2 from './component/Show2'
import Card from './component/Card'

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
        head1:"Mobile Operating System",
          arr1:["Android","Blckberry","iPhone","Windows Phone"],
          head2:"Mobile Manufacturers",
          arr2:["Samsung","HTC","Micromax","Apple"],
          btn1:["JOIN US","SETTINGS","LOGIN","CONTACT US","SEARCH","HELP","HOME","DOWNLOAD"],
          skills:["UI/UX","Front End Development","HTML","Css","Javascript","React","Node"],
         name:"Harshit",
          location:"Bangalore",
          description:"Full Stack Developer",
          skills:["HTML","CSS","BOOTSTRAP","JAVASCRIPT","REACT"]  

    }
  }
render() {
  return (
    <div className="App">
      <Show1 items={this.state}/>
      <Show2 items={this.state.btn1}/>
      <Card items={this.state}/>
    </div>
  );
}
}

export default App;

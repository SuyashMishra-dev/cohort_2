import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './folderA/list'
import List2 from './folderA/list2' 
import Button from './folderB/funcompts'
import Card from './folderC/card'

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
     
         
          btn1:["JOIN US","SETTINGS","LOGIN","CONTACT US","SEARCH","HELP","HOME","DOWNLOAD"],
     
         colors:["purple ","indigo ","plum", "blue","green ","yellow ","orange ","red "]
    }
  }
render() {
  return (
    <div>
      <List />
      <List2 />
        <div className="row mt-5"> 
          <div className="col-xl-1"><Button items={this.state.btn1[0]} items2={this.state.colors[0]}/></div>
          <div className="col-xl-1"><Button items={this.state.btn1[1]} items2={this.state.colors[1]}/></div>
      </div>
      <div className="row mt-2"> 
          <div className="col-xl-1"><Button items={this.state.btn1[2]} items2={this.state.colors[2]}/></div>
          <div className="col-xl-1"><Button items={this.state.btn1[3]} items2={this.state.colors[3]}/></div>
      </div>
      <div className="row mt-2"> 
          <div className="col-xl-1"><Button items={this.state.btn1[4]} items2={this.state.colors[4]}/></div>
          <div className="col-xl-1"><Button items={this.state.btn1[5]} items2={this.state.colors[5]}/></div>
      </div>
      <div className="row mt-2"> 
          <div className="col-xl-1"><Button items={this.state.btn1[6]} items2={this.state.colors[6]}/></div>
          <div className="col-xl-1"><Button items={this.state.btn1[7]} items2={this.state.colors[7]}/></div>
      </div>
      
      
      <Card />
    </div>
  );
}
}


export default App;

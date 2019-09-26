import React from 'react';
import logo from './logo.svg';
import './App.css';
import Convertor from './Convetor';
const volUnit=["...","Litre","mililitre","cubic foot"];
const speedUnit=["...","m/s","km/hour","miles/hr"];
const tempUnit=["...","K","C","Farenheit"];
class App extends React.Component {
   constructor(props){
   super(props)
   this.state={
     value:0,
     status:false,
     unitVal:0,
     conVal:0,
     unitSelIn:0,
     unitSelOu:0

  }
   this.handleChange= this.handleChange.bind(this);
    this.handleInput=this.handleInput.bind(this);
}
  handleChange = (e) =>{
    console.log(e.target.value)
  this.setState({
        [e.target.name]:e.target.value,
        status:true,
      })
  }
  handleInput = (e) =>{
    this.setState({
      [e.target.name]:e.target.value,
    })

    console.log(this.state.unitVal+"..."+this.state.value)
  }
  render(){
    console.log(this.state.status);
    console.log(this.state.unitVal)
    console.log(this.state.unitVal+"..."+this.state.value+"..."+this.state.unitSelIn+"...."+this.state.unitSelOu);
   if(this.state.value==="temp"){
      if(this.state.unitSelIn==="K" && this.state.unitSelOu==="C"){
         this.state.conVal= Number(this.state.unitVal)-273.15;
      }
      else if(this.state.unitSelIn==="K" && this.state.unitSelOu==="Farenheit"){
        this.state.conVal= ((Number(this.state.unitVal)-273.15)*(9/5))+32;
      }
      else if(this.state.unitSelIn==="Farenheit" && this.state.unitSelOu==="C"){
        this.state.conVal= ((Number(this.state.unitVal)-32)*(5/9));
      }
      else if(this.state.unitSelIn==="Farenheit" && this.state.unitSelOu==="K"){
        this.state.conVal= ((Number(this.state.unitVal)-32)*(5/9))+273.15;
      }
      else if(this.state.unitSelIn==="C" && this.state.unitSelOu==="K"){
        this.state.conVal= Number(this.state.unitVal)+273.15;
      }
      else if(this.state.unitSelIn==="C" && this.state.unitSelOu==="Farenheit"){
        this.state.conVal= ((Number(this.state.unitVal))*(9/5))+32;
      }
      else{
        this.state.conVal= this.state.unitVal;
      }
   }
   else if(this.state.value==='speed'){
    if(this.state.unitSelIn==="m/s" && this.state.unitSelOu==="km/hour"){
      this.state.conVal= Number(this.state.unitVal)*3.6;
   }
   else if(this.state.unitSelIn==="m/s" && this.state.unitSelOu==="miles/hr"){
    this.state.conVal= (Number(this.state.unitVal)*2.237);
  }
  else if(this.state.unitSelIn==="km/hour" && this.state.unitSelOu==="m/s"){
    this.state.conVal= (Number(this.state.unitVal)/3.6);
  }
  else if(this.state.unitSelIn==="km/hour" && this.state.unitSelOu==="miles/hr"){
    this.state.conVal= (Number(this.state.unitVal)/1.69);
  }
  else if(this.state.unitSelIn==="miles/hr" && this.state.unitSelOu==="m/s"){
    this.state.conVal= (Number(this.state.unitVal)/2.237);
  }
  else if(this.state.unitSelIn==="miles/hr" && this.state.unitSelOu==="km/hour"){
    this.state.conVal= (Number(this.state.unitVal)*1.69);
  }
  else{
    this.state.conVal= this.state.unitVal;
  }
   }
   else if(this.state.value==='vol'){
    if(this.state.unitSelIn==="Litre" && this.state.unitSelOu==="mililitre"){
      this.state.conVal= Number(this.state.unitVal)*1000;
   }
   else if(this.state.unitSelIn==="Litre" && this.state.unitSelOu==="cubic foot"){
    this.state.conVal= (Number(this.state.unitVal)/28.317);
  }
  else if(this.state.unitSelIn==="mililitre" && this.state.unitSelOu==="Litre"){
    this.state.conVal= (Number(this.state.unitVal)/1000);
  }
  else if(this.state.unitSelIn==="mililitre" && this.state.unitSelOu==="cubic foot"){
    this.state.conVal= (Number(this.state.unitVal)/28316.847
    );
  }
  else if(this.state.unitSelIn==="cubic foot" && this.state.unitSelOu==="mililitre"){
    this.state.conVal= (Number(this.state.unitVal)*28316.847);
  }
  else if(this.state.unitSelIn==="cubic foot" && this.state.unitSelOu==="Litre"){
    this.state.conVal= (Number(this.state.unitVal)*28.317
    );
  }
  else{
    this.state.conVal= this.state.unitVal;
  }
   }

   return (
      <div> 
       <select name ="value" value={this.state.value} onChange={this.handleChange}>
         <option>...Select Unit.........</option>
         <option value="temp" onSelect={this.handleSelect}>Temperature (K,°C,Farenheit)</option>
         <option value="speed">Speed (m/s, km/hr, miles/hr)</option>
         <option value="vol">Volume (Litre, millilitre, cubic foot)</option>
       </select>
        <div>
       <input name="unitVal" onChange={this.handleInput}></input> 
       <select  name="unitSelIn" onChange={this.handleChange}>
       {this.state.value==='vol'?volUnit.map((i)=>{return<option value={i}>{i}</option>}):null}
       {this.state.value==='speed'?speedUnit.map((i)=>{return<option value={i}>{i}</option>}):null}
       {this.state.value==='temp'?tempUnit.map((i)=>{return<option value={i}>{i}</option>}):null}
      </select>
       </div>
       <div>
          <input name="conVal" value={this.state.conVal} />
          <select name="unitSelOu" onChange={this.handleChange}>
          {this.state.value==='vol'?volUnit.map((i)=>{return<option>{i}</option>}):null}
          {this.state.value==='speed'?speedUnit.map((i)=>{return<option>{i}</option>}):null}
          {this.state.value==='temp'?tempUnit.map((i)=>{return<option>{i}</option>}):null}
          </select>
       </div>
          {this.state.value==='vol'?<Convertor unit={this.state.value}/>:null}
          {this.state.value==='speed'?<Convertor unit={this.state.value}/>:null}
          {this.state.value==='temp'?<Convertor unit={this.state.value}/>:null}
       </div>
       
    );
  }
  
}

export default App;

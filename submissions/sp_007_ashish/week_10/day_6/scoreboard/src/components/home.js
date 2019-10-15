import React from "react";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import {showForm,addItem,showData,displayPlayer} from "../redux/action";
import Player from "../components/players"
import FinalDetail from "../components/finaldetail"
class Home extends React.Component{
    constructor(props){
     super(props);{
      this.state={
        player:"",
        country:"",
        t20:"",
        odi:"",
        testscore:"",
        value:''
    }
     }
    
    }
    handleChange =(e)=>{
      console.log(e.target.name,e.target.value)
      this.setState({
         [e.target.name]:e.target.value,
        
     })
 }
 handleSubmit =(e) => {
   console.log(this.state.value);
   e.preventDefault();
   console.log(this.state)
   let obj ={
    player:this.state.player,
    country:this.state.value,
    t20:this.state.t20,
    odi:this.state.odi,
    testscore:this.state.testscore,
   }
   this.props.addItem(obj);
 }
  render(){
    console.log(this.props.data.show);
    switch(this.props.data.show){
      case 1:
        return(
             <div className="title">
             <button className="btn btn-primary mr-3" onClick={this.props.show}>Create</button>
              <button className="btn btn-primary mr-3" onClick={this.props.display}>show</button>
            
           <div className=" formtitle row">
            <div className="col-log-6"></div>
            <div class="col-lg-6">
              <div class="card bg-primary text-center card-form">
                <div class="card-body">
                  <p>Please fill out this form </p>
                  <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                      <input type="text" class="form-control form-control-lg"  onChange={(e)=>this.handleChange(e)} placeholder="Player" name="player"/>
                    </div>
                    <div class="form-group">
                      {/* <input type="text" class="form-control form-control-lg" onChange={(e)=>this.handleChange(e)} placeholder="Country" name="country"/> */}
                      <select class="form-control" name="value" onChange={(e)=>this.handleChange(e)}>
                        <option>Select Country</option>
                          <option value="india">India</option>
                          <option value="shrilanka">Shri Lanka</option>
                          <option value="africa">South Afrcica</option>
                          <option value="westindies">West Indies</option>
                          <option value="aus">Aurstrlia</option>
                          <option value="pakistan">Pakistan</option>

                          
                        </select>
                    </div>
                    <div class="form-group">
                      <input type="number" class="form-control form-control-lg" onChange={(e)=>this.handleChange(e)} placeholder="T-20" name="t20"/>
                    </div>
                    <div class="form-group">
                      <input type="number" class="form-control form-control-lg" onChange={(e)=>this.handleChange(e)} placeholder="ODI" name="odi"/>
                    </div>
                    <div class="form-group">
                      <input type="number" class="form-control form-control-lg" onChange={(e)=>this.handleChange(e)} placeholder="Test score" name="testscore"/>
                    </div>
                    <input type="submit" class="btn btn-outline-light btn-block"/>
                  </form>
                </div>
              </div>
            </div>
            </div> 
            </div>
            
        )
       case 2:
         return(
          <div>
             <button className="btn btn-primary mr-3" onClick={this.props.show}>Create</button>
            <button className="btn btn-primary mr-3" onClick={this.props.display}>show</button>
            {this.props.data.playersDetails.map((i,index)=>{return< Player i={i} index={index} dsply={this.props.displayPlayer}/>})}
          </div>
        
         )
         case 3:
            return(
             <div>
                <button className="btn btn-primary mr-3" onClick={this.props.show}>Create</button>
               <button className="btn btn-primary mr-3" onClick={this.props.display}>show</button>
             
               {this.props.data.playersDetails.map((i,index)=>{return< FinalDetail i={i} index={index} />})}
             </div>
           
            )
        default:
            return(
              <div className="title">
              <button className="btn btn-primary mr-3" onClick={this.props.show}>Create</button>
                <button className="btn btn-primary mr-3" onClick={this.props.display}>show</button>
              </div>
            );
    }
       
      
    }
}
const mapStateToProps =state =>{
    console.log('map state',state)
    return {
      data:state,
    };
};
const mapDispatchToProps = dispatch =>{
    console.log("dispatch called");
    return({
      show: () =>dispatch(showForm()),
      addItem:(item) => dispatch(addItem(item)),
      display :() => dispatch(showData()),
      displayPlayer :(idx) =>dispatch(displayPlayer(idx))
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
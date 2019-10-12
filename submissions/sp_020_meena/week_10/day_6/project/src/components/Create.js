import React from "react";
// import { addPlayer }  from "./redux/action";
// import { connect } from "react-redux"
var list = []
var a =localStorage.getItem("data");
var b = JSON.parse(a);
if(b ===null){}
else{
    list=[...b];
}
export default class Create extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name: "",
            country:"",
            t20Score:"",
            odiScore:"",
            testScore:"", 
        }
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value

        });
    }

    handleClick = (event) => {
        event.preventDefault()
        list.push(this.state);
        // let obj = {
        //     name: this.state.name,
        //     country: this.state.country,
        //     t20Score: this.state.t20Score,
        //     odiScore: this.state.odiScore,
        //     testScore: this.state.testScore
        // };
        // alert("player name is " + JSON.stringify(obj));
         localStorage.setItem("data", JSON.stringify(list))
    };
   
    render(){
        return(
            <div>
                <h1>Players Name Page</h1>
                <form>
                    <label>Palyer Name:</label>
                    <input type = "text" name = "name" 
                        value = {this.state.playerName} 
                        onChange = {(event) => {this.handleChange(event)}}>
                    </input><br/><br/>
                    <label>Select Country:</label>
                    <select type = "text" name = "country" 
                        value = {this.state.country}
                        onChange = {(event) => {this.handleChange(event)}}>
                        <option>select country</option>
                        <option>India</option>
                        <option>England</option>
                        <option>New Zeland</option>
                        <option>Pakistan</option>
                        <option>Afganistan</option>
                        <option>Australia</option>
                        <option>Butan</option>
                        <option>New York</option>
                        <option>Indonesia</option>
                        <option>London</option>
                    </select><br/><br/>
                    <label>T20 Score:</label>
                    <input type = "number" name = "t20Score"
                        value = {this.state.t20Score}
                        onChange = {(event) => {this.handleChange(event)}}>
                    </input><br/><br/>
                    <label>ODI Score:</label>
                    <input type = "number" name = "odiScore"
                        value = {this.state.odiScore} 
                        onChange = {(event) => {this.handleChange(event)}}>
                    </input><br/><br/>
                    <label>Test Score:</label>
                    <input type = "number" name = "testScore"
                        value = {this.state.testScore}
                        onChange = {(event) => {this.handleChange(event)}}>
                    </input><br/><br/>
                    <button type="button" className="btn btn-warning"
                        onClick = {(event) => {this.handleClick(event)}}>SUBMIT
                    </button>
                </form>
                
               {/* {this.props.list.map(item => {
                return (
                  <div>
                    {`${item.itemName} ${item.itemCountry} ${item.itemT20Score} ${item.itemOdiScore} ${item.itemTestScore}`}
                  </div>
                );
              })} */}
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     console.log("map state called ")
//     return{
//         list: state.list
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return{
//         add:item => dispatch(addPlayer(item))
//     };
// };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(Create);
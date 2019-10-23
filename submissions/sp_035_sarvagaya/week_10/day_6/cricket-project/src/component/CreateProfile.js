import React from "react";

let tempArr = [];
var loc = JSON.parse(localStorage.getItem("playerDetails"));
if(loc === null)
{

}
else
{
    tempArr = [...loc]
}
class CreateProfile extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state={
            name: "",
            country: "",
            t20Score: "",
            odiScore: "",
            testScore: ""

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e)
    {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleClick(evt)
    {
        evt.preventDefault();
        const name = this.state.name;
        const country = this.state.country;
        const t20 = this.state.t20Score;
        const odi = this.state.odiScore;
        const test = this.state.testScore;
        const totalScore = Number(t20) + Number(odi) + Number(test);

        tempArr.push(this.state)
        localStorage.setItem("playerDetails", JSON.stringify(tempArr))
        alert("Player Data has been stored Successfully")
        
        // console.log(tempArr)
        // console.log(loc)
    }

    render()
    {
        return(
            <div className="container-fluid">
                <div className="row">
                    <img className="col-12" style={{height: 750, width: 1525, filter: "blur(4px)"}} src="stadium.jpg" />
                </div>
                <div className="form" style={{position: "absolute", top: 100, marginLeft: 500, color: "white"}}>
                    <div className="row">
                        <h1 className="text-center col-12">Create New Player Profile</h1>
                    </div>
                    <div className="row">
                        <label htmlFor="name" className="col-6">Player Name:</label>
                        <input name="name" type="text" className="col-6 text-left" onChange = {this.handleChange} value = {this.state.name}></input>
                    </div>
                    <br />
                    <div className="row">
                        <label htmlFor="country" className="col-6">Choose Country</label>
                        <select name="country" className="col-6" onChange = {this.handleChange} value = {this.state.country}>
                            <option>Choose Country</option>
                            <option value="India">India</option>
                            <option value="Australia">Australia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="South Africa">South Africa</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Bangaladesh">Bangaladesh</option>
                            <option value="England">England</option>
                            <option value="Zimbawe">Zimbawe</option>
                        </select>
                    </div>
                    <br />
                    <div className="row">
                        <label htmlFor="t20Score" className="col-6">T20 Score:</label>
                        <input name="t20Score" type="number" className="col-6" onChange = {this.handleChange} value = {this.state.t20Score} ></input>
                    </div>
                    <br />
                    <div className="row">
                        <label htmlFor="odiScore" className="col-6">ODI Score:</label>
                        <input name="odiScore" type="number" className="col-6" onChange = {this.handleChange} value = {this.state.odiScore} ></input>
                    </div>
                    <br />
                    <div className="row">
                        <label htmlFor="testScore" className="col-6">Test Score:</label>
                        <input name="testScore" type="number" className="col-6" onChange = {this.handleChange} value = {this.state.testScore} ></input>
                    </div>
                    <br />
                    <div className="row">
                        <button className="col-12" type="submit" onClick = {this.handleClick} >Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateProfile;
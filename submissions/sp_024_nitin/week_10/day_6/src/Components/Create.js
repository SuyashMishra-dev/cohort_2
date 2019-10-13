import React from 'react';
import './Designs.css';

class Create extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                Name: '',
                newCountry: '',
                T20Score: '',
                ODIScore: '',
                TestScore: '',
                arr: []
        }
    }
    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const myValues = {
            Name: this.state.Name,
            newCountry: this.state.newCountry,
            T20Score: this.state.T20Score,
            ODIScore: this.state.ODIScore,
            TestScore: this.state.TestScore
        }
        this.setState({
            arr: [...this.state.arr, myValues]
        }) 
    }
   
    render() {
        //console.log(this.state);  

    

    return ( 
    <div className = "wallpaper"> 
        <form onSubmit = {this.handleSubmit}>
                <div className = "form-group">
                    <label className = "inputValue">Name:</label>
                    <input type = "text" className = "inputValue" name = "Name" value = {this.state.Name} onChange = {(e) => {this.handleChange(e)}} placeholder = "Player Name" />
                  </div>
                <div className="form-group">
                    <label className = "inputValue">Country:</label>
                    <input type = "text" className = "inputValue" name = "newCountry" value = {this.state.newCountry} onChange = {(e) => {this.handleChange(e)}} placeholder = "Country" />
                  </div>
                <div className="form-group">
                    <label className = "inputValue">T20 Score:</label>
                    <input type = "text" className = "inputValue" name = "T20Score" value = {this.state.T20Score} onChange = {(e) => {this.handleChange(e)}} placeholder = "T20 Score" />
                  </div>
                <div className="form-group">
                    <label className = "inputValue">ODI Score:</label>
                    <input type = "text" className = "inputValue" name = "ODIScore" value = {this.state.ODIScore} onChange = {(e) => {this.handleChange(e)}} placeholder = "ODI Score" />
                  </div>
                <div className="form-group">
                    <label className = "inputValue">Test Score:</label>
                    <input type = "text" className = "inputValue" name = "TestScore" value = {this.state.TestScore} onChange = {(e) => {this.handleChange(e)}} placeholder = "Test Score" />
                  </div>
                <button type = "submit" className = "btn btn-primary Create">Create</button>
                <button type = "Display" className = "btn btn-primary Show">Show</button>
            </form>
      All items:
      <br />
      {this.state.arr.map((item, index) => { return <div key = {index}><p>{item.Name}</p> <p>{item.newCountry}</p> <p>{item.T20Score}</p> <p>{item.ODIScore}</p> <p>{item.TestScore}</p></div>})}
    </div>
    );
    }
   

   
}
export default Create;
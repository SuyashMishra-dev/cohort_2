import React from "react"
import ReactDOM from "react-dom";


export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      PlayerName: "",
      Country: "",
      T20Score: "",
      ODIScore: "",
      TestScore: "",
      arr: []

    };
  }
  handleSubmit = (event) => {
    const rest = {
      PlayerName: this.state.PlayerName,
      Country: this.state.Country,
      T20Score: this.state.T20Score,
      ODIScore: this.state.ODIScore,
      TestScore: this.state.TestScore
    }

    this.setState({ arr: [...this.state.arr, rest] })
    event.preventDefault();
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    console.log(this.state)
    { this.state.arr.map((item, index) => <div key={index}>{item.TestScore}</div>) }
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <table className="color">
            <tr>
              <td>
                <label>Player Name </label>
              </td>
              <td>
                <input type='text' name='PlayerName' className="inputvalue" onChange={(e) => this.handleChange(e)} value={this.state.PlayerName} placeholder='Player Name' />
              </td>
            </tr>
            <tr>
              <td>
                <label>Country</label>
              </td>
              <td>
                <select>
                  <option value={this.state.India} name='India' onChange={(e) => this.handleChange(e)}>India</option>
                  <option value={this.state.SouthAfrica} name='South Africa' onChange={(e) => this.handleChange(e)}>South Africa</option>
                  <option value={this.state.Australia} name='Australia' onChange={(e) => this.handleChange(e)}>Australia</option>
                  <option value={this.state.NewZealand} name='NewZealand' onChange={(e) => this.handleChange(e)}>New Zealand</option>
                  <option value={this.state.Afghanistan} name='Afghanistan' onChange={(e) => this.handleChange(e)}>Afghanistan</option>
                  <option value={this.state.England} name='England' onChange={(e) => this.handleChange(e)}>England</option>
                  <option value={this.state.Ireland} name='Ireland' onChange={(e) => this.handleChange(e)}>Ireland</option>
                  <option value={this.state.Pakistan} name='Pakistan' onChange={(e) => this.handleChange(e)}>Pakistan</option>
                  <option value={this.state.WestIndies} name='WestIndies' onChange={(e) => this.handleChange(e)}>West Indies</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label>T20 Score</label>
              </td>
              <td>
                <input type='number' name='T20Score' className="inputvalue" onChange={(e) => this.handleChange(e)} value={this.state.T20Score} placeholder='T20 Score' />
              </td>
            </tr>
            <tr>
              <td>
                <label>ODI Score</label>
              </td>
              <td>
                <input type='text' name='ODIScore' className="inputvalue" onChange={(e) => this.handleChange(e)} value={this.state.ODIScore} placeholder='ODI Score' />
              </td>
            </tr>
            <tr>
              <td>
                <label>Test Score</label>
              </td>
              <td>
                <input type='text' name='TestScore' className="inputvalue" onChange={(e) => this.handleChange(e)} value={this.state.TestScore} placeholder='Test Score' />
              </td>
            </tr>
          </table>
          <button type="submit" value="Submit" className="btn btn-primary">Create</button>
          <p></p>
          <button type="submit" value="Submit" className="btn btn-secondary">Display</button>
        </form>
        Player Details:
        {this.state.arr.map((item, index) => <div key={index}>
          <p>Player Name:{item.PlayerName}</p>
          <p>Country:{item.Country}</p>
          <p>T20Score:{item.T20Score}</p>
          <p>ODIScore:{item.ODIScore}</p>
          <p>TestScore:{item.TestScore}</p>

        </div>)}

      </div>
    );
  }

}




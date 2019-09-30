import React from "react";
import axios from "axios";
import Display from './apidata/Display'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data2: [],
      info: [],
      status: false,
      value: '',
      repo: ''
    };
  }
  handleNameChange = (e) => {
    this.setState({
      value: e.target.value
    })
    console.log(this.state.value)
  }

  handleCLick = () => {
    const requestParam = {
      method: "get",
      url: "https://api.github.com/search/users?q=" + this.state.value,

    }
    axios(requestParam)
      .then(response => {

        this.setState({
          data: response.data,
          status: true
        });
        console.log(this.state.data);
      })
      .catch(err => console.log(err))
  }

  reposet = (val) => {
    console.log(val)

    const requestParam = {
      method: "get",
      url: val
    }

    axios(requestParam)
      .then(response => {
        this.setState({
          data2: response.data

        });
      })
  }

  render() {

    let list = this.state.data2.map(elem => {
      return (<div>
        <React.Fragment>
          <div>
            {elem.name}
          </div>
        </React.Fragment>
      </div>)
    })
    return (
      <div className="container-fluid">
        <div >
          <input className="offset-1   rounded" onChange={(e) => this.handleNameChange(e)} value={this.state.value}></input>
          <button className="btn btn-warning ml-3" onClick={() => this.handleCLick()}>click</button>
          <div className="row">
            <div className="col-xl-5">
              {this.state.status ? (
                <Display {...this.state.data} repofun={this.reposet} />
              ) : (
                  <h1 className="display-4 offset-1">Search for github users</h1>
                )}
            </div>
            <div className="col-xl-4 ">
              {list}
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default App;

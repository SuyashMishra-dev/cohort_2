import React from 'react';
import axios from "axios";
import User from "./component/user.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        status : false,
        data : [],
        search : [],
        repos_inf0 : [],
        repos_status : false,
    }
  }
  handleChange = (i) => {
      this.setState({query:i.target.valsue});
  }
  handleClick = (i) => {

    axios('https://api.github.com/search/users?q=${this.state.search}`)
    .then(resp => {
      this.setState({
        data : resp.data.items,
        method : get,
        status : true
      })
    })
  }
    getRepos_info(search) {
      axios(search)
      .then(resp => {
        this.setState({
          currentRepos : resp.data,
          repos_status : true
        })
      })

    }
    render() {
      return (
        <div className = "container">
          <form onSubmit = {this.handleClick}>
            <div className = "row">
                <div>
                  <input className = "form-control" value = {this.state.query} onChange = {this.handleChange}></input>
                </div>
                <div className = "col">
                  <button className = "btn btn-primary" type = "submit" >Search</button>
                </div>
            </div>
          </form>
          {this.state.repos_status ? (
            <div className = "row">
                <div className = " col-4"> 
                  <User data = {this.state.data} func ={(query) => this.getRepos_info(search)}/>
                </div>
                <div className = "col-2">
                  <h2 className = "text-center" id = "user_repo">User reositories</h2>
                  <Repos_data data = {this.state.currentRepos}/>
                </div>
                );}

            </div>
            <div>
              <User/>
            </div>

}
export default App;


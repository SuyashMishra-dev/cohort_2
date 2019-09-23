import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

//import Table from './components/Table';
import Cards from './components/Cards';
import ReposData from './components/ReposData'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status : false,
      data : [],
      query : '',
      reposInfo: [],
      reposStatus : false
    }
  }

  handleChange = (e) => {
    this.setState({query: e.target.value});
    console.log(this.state.query)
  }

  handleClick = (e) => {
    
    axios(`https://api.github.com/search/users?q=${this.state.query}`)
      .then(resp => {
        console.log(resp.data.items);
        this.setState({
          data : resp.data.items,
          status : true
        })
      })
      .catch(err => console.log(err));
      e.preventDefault();
  }

  getReposInfo(query) {
    axios(query)
      .then(resp => {
        console.log(resp);
        this.setState({
          currentRepos: resp.data,
          reposStatus : true
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className = "container mt-3">
        <form onSubmit={this.handleClick} >
          <div className = "row mx-auto">
              <div className = "offset-3 col-lg-4">
                  <input className = "form-control" value={this.state.query} onChange={this.handleChange}></input>
              </div>
              <div className = "col">
                  <button className = "btn btn-primary" type = "submit">Search</button>
              </div>
          </div>
        </form>
        
        {this.state.status ? (
          <div className = "row">
            <div className = "col-lg-8">
              <Cards data={this.state.data} func={(query) => this.getReposInfo(query)}/>
            </div>
            <div className = "offset-lg-1 col-lg-3">
              {this.state.reposStatus ? (
                <div data-spy="scroll">
                  <h3 className = "text-center" id="user-repos">User Repositories</h3>
                  <ReposData data={this.state.currentRepos}/>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        ) : (
          <div className = "text-center my-5"></div>
        )}
      </div>
      
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

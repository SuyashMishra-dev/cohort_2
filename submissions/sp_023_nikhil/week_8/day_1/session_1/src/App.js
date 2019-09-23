import React from 'react';
import axios from 'axios';
import Github from './components/Github/Github'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      status: false,
      value: ''
    };
  }

  
  // componentDidMount = () => {
    handleChange = (e) => {
      this.setState({
        value: e.target.value 
      });
    }
  
  handleClick = () => {
      const requestParam = {
        method: "get",
        url: `https://api.github.com/search/users?q=${this.state.value}`
      }
      
      axios(requestParam)
        .then(response => {
          this.setState({
            data: response.data.items,
            status: true
          })
          console.log(this.state.data)
        })
        .catch(error => console.log(error))
      }  
  render() {
    let info = this.state.data.map(elm => { return (<Github name={elm.login} picture={elm.avatar_url} score={elm.score} link={elm.link} repo={elm.repos_url} />)})      
    
    return (
      <div>
        <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.value} />
        <button onClick={() => this.handleClick()}>Search</button>

        {this.state.status ? info : (<h2>Enter Name</h2>)}

      </div>
    )
  }

  
}

export default App;

{/* <Github data={this.state.data} /> */}
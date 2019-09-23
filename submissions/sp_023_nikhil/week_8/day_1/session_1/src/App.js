import React from 'react';
import axios from 'axios';
import Github from './components/Github/Github'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      status: false
    };
  }

  componentDidMount() {
    const requestParam = {
      method: "get",
      url: "https://api.github.com/users?q"
    }

    axios(requestParam)
      .then(response => {
        this.setState({
          data: response.data,
          status: true
        })
      })
      .catch(err => console.log(err))
  };

  render() {
    console.log(this.state.data)
    let info = this.state.data.map(elm => {
      return (
        <Github name={elm.login} picture={elm.avatar_url} repo={elm.url} />
      )
    })
    return (
      <div>
        <input type="text" />
        <button>Search</button>
        {this.state.status ? info : (<h1>Loading...</h1>)}

      </div>
    )
  }
}

export default App;
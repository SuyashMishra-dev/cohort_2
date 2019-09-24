import React from 'react';
import './App.css';
import axios from 'axios';
import Display from './Components/Display';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      userInput: '',
    };
    
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/search/users?q=mohammed+tanveer")
      .then(ressult => {
        const data = ressult.data.items;
        console.log(data);
        this.setState({
          data: data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>

        {this.state.data.map((item, index) => {
          console.log(item);
          return <Display {...item} />;
        })}
      </div>
    );
  }
}

export default App;

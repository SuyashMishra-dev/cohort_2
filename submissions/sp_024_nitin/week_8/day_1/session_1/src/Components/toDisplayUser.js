import React, {Component} from 'react';
import axios from 'axios';

class toDisplayUser extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
      };
    }
  }
  
  ComponentDidMount() {
    axios.get("https://developer.github.com/v3/search/") 
    .then(res => {
      const data = res.data.results;
      //console.log(data);
      this.setState({
        data: data
      });
    })
    .catch(error => console.log(error));
  }
  export default toDisplayUser;
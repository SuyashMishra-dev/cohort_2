import React, { Component } from 'react'
var data=localStorage.getItem("playerDetails");
var details=JSON.parse(data);

class Rank extends Component {
  render() {
    return (
      <div>
        {/* {details.filter().map(item)} */}
      </div>
    )
  }
}
export default Rank;

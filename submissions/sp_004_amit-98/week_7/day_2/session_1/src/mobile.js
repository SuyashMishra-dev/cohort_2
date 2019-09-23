import React from 'react';
class Mobile extends React.Component{
    render(){
      return (

        <div>
         <h1>{this.props.obj}</h1>
          <ul>
          <li>{this.props.item1}</li>
          </ul>
        </div>
      );
    }
  }
  export default Mobile;
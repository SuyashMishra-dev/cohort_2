import React from 'react';
// import '../../App.css';

export default class List extends React.Component{
    render() {
  return (
    <div>
        <h1 className="head">{this.props.head}</h1>
    
          <li className="first">{this.props.first}</li>
          <li className="second">{this.props.second}</li>
          <li className="third">{this.props.third}</li>
          <li className="fourth">{this.props.fourth}</li>
       
     
    </div>
    
  )
}
}

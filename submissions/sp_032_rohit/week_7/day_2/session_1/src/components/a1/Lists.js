import React from 'react'   

export default class Lists extends React.Component {
    render(){
  return (
    <div>
        <h1 className='head'>{this.props.head}</h1>
        <div>
        <ul>
            <li className='f'>
            {this.props.f}
            </li>
            <li className='s'>
            {this.props.s}
            </li>
            <li className='t'>
            {this.props.t}
            </li>
            <li className='fth'>
            {this.props.fth}
            </li>
        </ul>
        </div>
    </div>
  )
}
}

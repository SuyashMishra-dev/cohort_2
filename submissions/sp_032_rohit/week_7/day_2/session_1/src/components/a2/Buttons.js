import React from 'react';
import styles from './Buttons.module.css'

export default class Buttons extends React.Component {
    render(){
  return (
    <div>
        <table>
            <tr>
                <button style={{backgroundColor: this.props.clr1}} className="b1">
                {this.props.b1}
                </button>
                <button style={{backgroundColor: this.props.clr2}} className="b2">
                {this.props.b2}
                </button>
                <p className="xyz">{this.props.styles}</p>
            </tr>
        </table>
    </div>
  )
}
}

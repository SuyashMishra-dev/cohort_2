import React from 'react';
import styles from './Card.module.css'

export default class Card extends React.Component {
    render(){
  return (
    <div>
        <table className= {styles.table}>
            <tr className= {styles.box}>
                <img className="image" src={this.props.src} />
                <h4 className="name">{this.props.name}</h4>
                <p className="city">{this.props.city}</p>
                <p className="pos">{this.props.pos}</p>
                <tr className = {styles.box3}>
                    <td className = {styles.box1}>
                    {this.props.mess}
                    </td>
                    <td className = {styles.box2}>
                    {this.props.foll}
                    </td>
                </tr>
                </tr>
                <tr className= {styles.bottom}>
                    <p>{this.props.skills}</p>
                    <tr className = {styles.box3}>
                    <td className = {styles.skillBox}>
                    {this.props.s1}
                    </td>
                    <td className = {styles.skillBox}>
                    {this.props.s2}
                    </td>
                    <td className = {styles.skillBox}>
                    {this.props.s3}
                    </td>
                    </tr>
                    <tr>
                    <td className = {styles.skillBox}>
                    {this.props.s4}
                    </td>
                    <td className = {styles.skillBox}>
                    {this.props.s5}
                    </td>
                    <td className = {styles.skillBox}>
                    {this.props.s6}
                    </td>
                    <td className = {styles.skillBox}>
                    {this.props.s7}
                    </td>
                </tr>
                </tr>

        </table>
    </div>
  )
}
}

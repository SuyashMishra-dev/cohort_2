import React from 'react';
import '../../App.css';
import styles from'./button.module.css'

export default class Button extends React.Component{
    render() {
  return (
    <div >
        <table>
         <tr>
            <td><button style={{background:this.props.clr1}} className='button1'>{this.props.button1}{this.props.style}</button></td>
            <td> <button style={{background:this.props.clr2}} className='button2'>{this.props.button2}</button></td>
        </tr>
       
          
        </table>
        
    </div>
  )
}
}
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {items} from './items'

export default class India extends Component {
    state= {
       itms: items
     };
    
     handleInfo = () => {
       this.setState ({
         title: this.title
         
       })
     }
   
    render() {
        return (
            <div>
                <img src='./india.jpg' alt=''></img>
               <p> This Painting is unique collection.</p>
               <h5> Qty : 20 </h5>
               <h5> Price: $400</h5>
               <Link to="/ShopCart" className="nav-link"> 
      <button><i className="fas fa-shopping-cart"></i> Add to Cart</button></Link>
    
            </div>
        )
    }
}

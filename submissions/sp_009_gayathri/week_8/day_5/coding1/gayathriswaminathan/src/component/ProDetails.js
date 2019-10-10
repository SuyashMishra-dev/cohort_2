import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import {items} from './items'
import Product from './Product'
import FAq from './FAq';

export default class ProDetails extends Component {
    state = {
        prodts: items
    };
    render() {
        
      const {prodts} = this.state;
      console.log(this.state.prodts)
        return (
            <React.Fragment>
                <FAq orders={this.state.prodts} />
            <div>
                Hello from Product Details
            {prodts.map(itm =>{
             return  <Product key={itm.id} itm={itm}/>;
                   
              } ) }      
                
            </div>
            </React.Fragment>
        );
    }   
}

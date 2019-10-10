import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class FineArtMural extends Component {
    render() {
        // state= {
        //     title : ''
        //  };
        return (
            <div>
                <img src='./yellow.jpg' alt=''></img>
             <p>   At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque 
                 quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                  qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis</p> 
                  <h5> Qty : 12 </h5>
                 <h5> Price: $100</h5>
                 <Link to="/ShopCart" className="nav-link"> 
      <button><i className="fas fa-shopping-cart"></i> Add to Cart</button></Link>
    
                  </div>
        )
    }
}

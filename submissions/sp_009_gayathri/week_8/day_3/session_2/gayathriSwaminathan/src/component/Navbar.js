import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-sm-5">
                <ul className="navbar-nav align-items-around">
      <li className="nav-item ">
      <Link to="/" className="nav-link"> Home </Link>
      </li>
      <li class="nav-item">
      <Link to="/productList" className="nav-link"> Products </Link>
      </li>
      <li class="nav-item">
      <Link to="/faq" className="nav-link"> FAQs </Link>
      </li>
      <li class="nav-item">
      <Link to="/about" className="nav-link"> About Us </Link>
      </li>
      <li class="nav-item">
      <Link to="/contactus" className="nav-link"> Conatct Us </Link>
      </li>
      <li class="nav-item">
      <Link to="/ShopCart" className="ml-auto"> 
      <button> Cart  </button> </Link>
      </li>
    </ul>
      
      </nav>
     
                         <br />
          {/* <Link to= "/about"> About</Link>
          <br />
          <Link to= "/product"> Product </Link>
          <br />
          <Link to = "/furniture">Furniture</Link>
          <br />
          <Link to= "/homedecor">Homedecor</Link>
          <br />
          <Link to = "/sale">Offers</Link>
          <br />
          <Link to = "/faqs">FAQs </Link>
          <br />
          <Link to = "/contactus"> Contact</Link>
          <br />
          <Link to = "/ItemList"> Product List</Link>
          <br />
          <Link to= "/details"> Product Details</Link>
          <br />
          <Link to = "/ShopCart"> ShopCart</Link>
          <br /> */}



              
            </div>
        )
    }
}

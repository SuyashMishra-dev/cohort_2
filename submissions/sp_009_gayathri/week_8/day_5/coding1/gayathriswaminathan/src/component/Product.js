import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import '../App.css'

export default class Product extends Component {
   state= {
     title : ''
  };
 
  handleInfo = () => {
    this.setState ({
      title: this.title
      
    })
  }

  render() {
     const { title, content, image } = this.props.itm;
     this.title=this.props.itm.title
     console.log (this.title)
     return(
       <React.Fragment>
        <div class="card">
        <img src={image} class="card-img-top align-self-center" alt="art"/>
        <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text">{content}</p>
        <button class="btn btn-danger" >
        <Link to={"/" + this.title}>More</Link> 
        </button> 
        </div>
        </div>
       </React.Fragment>
      )
    
  }
}

// state= {
  //   title : ''
  // };
  // handleInfo = () => {
  //   this.setState ({
  //     title: this.props.itm.title
  //   })
  // }

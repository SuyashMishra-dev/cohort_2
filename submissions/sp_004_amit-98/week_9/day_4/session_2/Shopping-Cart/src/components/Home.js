import React from 'react'
import Footer from './Footer'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Home extends React.Component{
    
  render(){
    let itemList = this.props.items.map(item=>{
      return(
          <div className="card" key={item.id}>
                  <div className="card-image">
                      <img style={{height:"350px"}} src={item.img} alt={item.title}/>    
                      <hr></hr>
                      <span style={{float:"right",background:"green",color:"white",marginLeft:"-20px",width:"40px",textAlign:"center"}}>{item.rating}★</span>         
                      <h5 style={{textAlign:"center"}}>{item.title}</h5>
                      </div>
                  <div className="card-content">
                      <p>{item.desc}</p>
                      <p><b>Price:  ₹{item.price}</b></p>
                  </div>
                 <Link to="/shop"><button className="btn btn-primary w-100">SHOP NOW</button></Link> 
           </div>
      )
  })

  return (
    <div style={{marginTop:"60px"}}>
      <div><img src="https://wallpaperset.com/w/full/c/c/1/239835.jpg"></img></div>
      <div className="boxHome">
        {itemList}
      </div>
     <Link to="/shop"> <button className="btn btn-secondary" style={{float:"right",marginRight:"130px",marginBottom:"30px"}}>See More...</button></Link>
      <div style={{clear:"both"}}>
      <Footer/>
      </div>
     
    </div>
  )
}
}
const mapStateToProps = (state)=>{
  return {
    items: state.itemsHome
  }
}
export default connect(mapStateToProps,null)(Home)

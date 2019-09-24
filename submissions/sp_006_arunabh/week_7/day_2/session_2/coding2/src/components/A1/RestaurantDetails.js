import React from 'react';

class RestaurantDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            val: props.menu
        };
        // console.log(this.state.val.url)
    }


    render(){
        return(
            <div style = {{border: "1px solid gray", width: "550px", height: "250px", margin: "30px"}}>
                <div style = {{float: "both"}}>
                    <img style = {{float: "left", marginLeft: "15px"}} src = {this.state.val.url} alt="Food" height="180" width="150" />
                    <div style = {{float: "left", width: "250px",marginLeft: "5px"}}>
                        <h2 style={{color: "maroon"}}>{this.state.val.name}</h2>
                        <p style={{color:"gray"}}>{this.state.val.description}</p>
                        <p style={{color:"gray"}}>{this.state.val.price}</p>
                        <p>{this.state.val.minPrice + " * " + this.state.val.time}</p>
                        <p>{this.state.val.payments}</p>    
                    </div>
                    <div style={{textAlign: "right", marginRight: "15px"}}>
                        <h3 style={{color:"green"}}>{this.state.val.rating}</h3>
                        <p style={{color:"gray"}}>{this.state.val.votes}</p>
                        <p style={{color:"gray"}}>{this.state.val.reviews}</p>
                    </div>
                </div>
                <input style ={{float: "right", color: "green"}} type="submit" value="Order Online >"/>
            </div>
        );
    }
}

export default RestaurantDetails;
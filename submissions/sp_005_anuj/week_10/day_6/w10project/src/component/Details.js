import React, { Component } from 'react'
import axios from 'axios';
var total = 0
export default class Details extends Component {
    constructor(props) {
        super(props);
        let data= localStorage.getItem("arr")
        this.state={
            arr:JSON.parse(data),
            api:''
        }
    }
  
    componentDidMount=()=>{
        axios.get("http://numbersapi.com/" +total + "?json")
        .then (res => {
            console.log(res)
            this.setState({
                api:res.data.text
            })
        })
        console.log(this.state.api)
    }
    render() {
        console.log(this.props);
        let rr = this.state.arr.find((items)=>{
            return this.props.match.params.id == items.playername
        })
      
            total = Number(rr.t20)+Number(rr.odi) + Number(rr.test)
        
        return (
            <div >
                <div class="card text-center mt-5 text-light" style = {{backgroundColor : "rgba(0,0,0,0.5)"}}>
                    <div class="card-header">
                        <h1>{rr.playername}</h1>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{rr.country}</h5>
                        <p class="card-text">T20 : {rr.t20}</p>
                        <p class="card-text">ODI : {rr.odi}</p>
                        <p class="card-text">Test :{rr.test}</p>
                        <p class="card-text">Total :{total}</p>
                    </div>
                    <div class="card-footer text-light">
                        {this.state.api}
                    </div>
                </div>
            </div>
        )
    }
}

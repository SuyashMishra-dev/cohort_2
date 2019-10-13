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
        let rr = this.state.arr.find((items)=>{
            return this.props.match.params.name == items.playername
        })
      
            total = Number(rr.t20)+Number(rr.odi) + Number(rr.test)
        
        return (
            <div>
                <div className="container">
                    <div className="card card-body">
                        <div>
                            <h1>Name :{rr.playername}</h1>
                            <h1>Country :{rr.country}</h1>
                            <h1>T20 Score:{rr.t20}</h1>
                            <h1>ODI Score:{rr.odi}</h1>
                            <h1>Test ODI :{rr.test}</h1>
                            <h1>Total: {total}</h1>
                            <h1>Quote:{this.state.api}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

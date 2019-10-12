import React, { Component } from 'react'

export default class Details extends Component {
    constructor(props) {
        super(props);
        let data= localStorage.getItem("arr")
        this.state={
            arr:JSON.parse(data)
        }
    }
    render() {
        console.log(this.props.match.params.name)
        let rr=this.state.arr.find((items)=>{
            return this.props.match.params.name==items.playername
        })
        console.log(rr)
        
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
                                    </div>
                        </div>
                    </div>
  
            </div>
        )
    }
}

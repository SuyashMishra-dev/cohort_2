import React from 'react';
import {Link} from 'react-router-dom';
var data = localStorage.getItem("arr");
var details=JSON.parse(data);
let list;
class Show extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            list : details,
            sortType : '',
            sortOrder : "",
        }
    }
    handleChange=(event) => {
       let x = details.filter(element => element.country == event.target.value )
        this.setState({list: x})
     }
     handleSortType = (event) => {
        this.setState({sortType: event.target.value})
        console.log(event.target.value)
     }
     handleSortOrder = (event) => {
         console.log(event.target.value)
         if(event.target.value === "a" ) {
             if(this.state.sortType === "t20") {
                 let x = this.state.list.sort((a,b) => Number(a.t20) - Number(b.t20))
                 console.log(x)
                 this.setState({list: x })
             }
             else if (this.state.sortType === "odi") {
                let x = this.state.list.sort((a,b) => Number(a.odi) - Number(b.odi))
                console.log(x)
             }
             else if (this.state.sortType ==="test") {
                let x = this.state.list.sort((a,b) => Number(a.test) - Number(b.test))
                console.log(x)
             }
            }
        if(event.target.value === "d" ) {
            console.log("HEY")
            if(this.state.sortType === "t20") {
                let x = this.state.list.sort((a,b) => Number(b.t20) - Number(a.t20))
                console.log(x)
                this.setState({list: x })
            }
            else if (this.state.sortType === "odi") {
                let x = this.state.list.sort((a,b) => Number(b.odi) - Number(a.odi))
                console.log(x)
            }
            else if (this.state.sortType ==="test") {
                let x = this.state.list.sort((a,b) => Number(b.test) - Number(a.test))
                console.log(x)
            }
            
        } 
    
}
    render(){
     list = this.state.list.map((item) => {
        return(
            <div className="mt-4 offset-5 text-light">
                <table style = {{border: "2px solid white"}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>country</th>
                            <th>T20</th>
                            <th>ODI</th>
                            <th>Test</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <Link to={`/details/${item.playername}`}> <td> {item.playername}</td></Link>
                            <td> {item.country}</td>
                            <td> {item.t20}</td>
                            <td> {item.odi}</td>
                            <td> {item.test}</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        )
    })

  return (
    <div >
        <h1>Filter</h1>
        <select className = "custom-select" name = "country" onChange = {(e)=>this.handleChange(e)}>
                <option value = " ">SELECT COUNTRY</option>
                <option value = "India">INDIA</option>
                <option value = "England">England</option>
                <option value = "Pakistan">Pakistan</option>
                <option value = "New Zealand">New Zealand</option>
                <option value = "Australia">Australia</option>
                <option value = "Zimbabwe">Zimbabwe</option>
                <option value = "USA">USA</option>
                <option value = "Canada">Canada</option>
                <option value = "China">China</option>
                <option value = "West Indies">West Indies</option>
        </select> <br></br>  
        <select className = "custom-select" onChange = {(e) => this.handleSortType(e)}>
            <option>select</option>
            <option value = "t20">T20</option>
            <option value = "odi">ODI</option>
            <option value = "test">Test</option>
        </select>
        <select className = "custom-select" onChange = {(e) => this.handleSortOrder(e)}>
            <option>select</option>
            <option value = "a">Assending Order </option>
            <option value = "d">Desencding Order</option>
        </select>
          {list}
    </div>
  )}
  
}
export default Show;
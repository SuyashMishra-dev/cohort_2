import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
// import Pagination from './pagination.js'
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
            sortFlag: false
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
     handBoard = (event) => {
        if(event.target.value === "t2b") {
            let x = this.state.list.sort((a,b) => (Number(b.t20) + Number( b.test) + Number(b.odi)) - (Number(a.t20) + Number(a.odi) + Number(a.test)))
            this.setState({list: x})
        }
        else if (event.target.value === "b2t") {
            let x = this.state.list.sort((a,b) => (Number(a.t20) + Number( a.test) + Number(a.odi))- (Number(b.t20) + Number(b.odi) + Number(b.test)))
            this.setState({list:x})
        }
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
                this.setState({list: x })
                console.log(x)
             }
             else if (this.state.sortType ==="test") {
                let x = this.state.list.sort((a,b) => Number(a.test) - Number(b.test))
                this.setState({list: x })
                console.log(x)
             }
            }
        if(event.target.value === "d" ) {
            if(this.state.sortType === "t20") {
                let x = this.state.list.sort((a,b) => Number(b.t20) - Number(a.t20))
                console.log(x)
                this.setState({list: x })
            }
            else if (this.state.sortType === "odi") {
                let x = this.state.list.sort((a,b) => Number(b.odi) - Number(a.odi))
                this.setState({list: x })
                console.log(x)
            }
            else if (this.state.sortType === "test") {
                let x = this.state.list.sort((a,b) => Number(b.test) - Number(a.test))
                this.setState({list: x })
                console.log(x)
            }  
        } 
    }
    render(){
     list = this.state.list.map((item) => {
        return(
                <tr >
                    <td><Link to={`/details/${item.playername}`}>  {item.playername}</Link></td>
                    <td> {item.country}</td>
                    <td> {item.t20}</td>
                    <td> {item.odi}</td>
                    <td> {item.test}</td>
                    <td>{Number(item.t20) + Number(item.odi) + Number(item.test)}</td>
                </tr>
            )
    })

  return (
    <div >
        <div >
            <center>
            <h1 className = "text-light">Filter</h1>
            <select className = "custom-select w-25 mt-2 container" name = "country" onChange = {(e)=>this.handleChange(e)}>
                    <option value = " ">Select Country</option>
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
            <select className = "container w-25 mt-2 custom-select" onChange = {(e) => this.handleSortType(e)}>
                <option>Select Format</option>
                <option value = "t20">T20</option>
                <option value = "odi">ODI</option>
                <option value = "test">Test</option>
            </select><br></br>
            <select className = "custom-select w-25 mt-2 container" onChange = {(e) => this.handleSortOrder(e)}>
                <option>Select Order</option>
                <option value = "a">Assending Order </option>
                <option value = "d">Desencding Order</option>
            </select>
            <select className = "custom-select w-25 mt-2 container" onChange = {(e) => this.handBoard(e)}>
            {/* <Link to={`/details/${item.playername}`}>  {item.playername}</Link> */}
                <option>Leaderboard</option>
                <option value = "t2b">Top to bottom</option>
                <option value = "b2t">Bottom to top</option>
            </select>
            </center>
        </div>
        <div>
        <h1 className = "text-center text-light">Details</h1>
            <table className = "table table-dark text-light mt-3 text-center" style = {{backgroundColor: "rgba(0,0,0,0.5)"}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>country</th>
                        <th>T20</th>
                        <th>ODI</th>
                        <th>Test</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                {list}
                </tbody>
            </table>
        </div> 
        <div>
            {/* <Pagination/> */}
        </div>
    </div>
  )}
}
const mapStateToProps = (state)=>{
    // console.log('state is',state)
    return {
      details: state.item
    }
};
// const Pagination = (props) => {
//     let limit = Math.floor(props.length/10);
//     let id = this.state.list.t20
//         if(id === '0') {
//             props = list.slice(0, 10);
//         }
//         else {
//             props = list.slice((10*Number(id)),10*(Number(id)+1))
//         }
//     return (
//         <div>
//             <nav>
//                 <ul className='pagination justify-content-center'>
//                     {props.id === '0' ? (
//                         <li className='page-item disabled'>
//                             <Link to={`/${Number(props.id) - 1}`}  className='page-link disabled'>Previous Page</Link>
//                         </li>
//                     ) : (
//                         <li className='page-item'>
//                             <Link to={`/${Number(props.id) - 1}`} className='page-link'>Previous Page</Link>
//                         </li>
//                     )}
//                     {Number(props.id) >= limit ? (
//                         <li className='page-item disabled'>
//                             <Link to={`/${Number(props.id) + 1}`} className='page-link'>Next Page</Link>
//                         </li>
//                     ) : (
//                         <li className='page-item'>
//                             <Link to={`/${Number(props.id) + 1}`} className='page-link'>Next Page</Link>
//                         </li>
//                     )}
                    
//                 </ul>
//             </nav>
//         </div>
//     )
// };
export default connect(mapStateToProps,null)(Show);

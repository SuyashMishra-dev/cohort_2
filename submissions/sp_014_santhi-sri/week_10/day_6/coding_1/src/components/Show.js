import React from "react"
import { connect } from 'react-redux'
// var  data= JSON.parse(localStorage.getItem("PlayerDetails"))

const Show = (props) => {
    return (        
                <div>
                    <table class="table table-striped table-light">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Player Name</th>
                                <th scope="col">Country</th>
                                <th scope="col">T20 Score</th>
                                <th scope="col">ODI Score</th>
                                <th scope = "col">TestScore</th>
                            </tr>
                        </thead>
                        <tbody>
                    {props.orderList.map((item,index) => {
                             return (
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{item.player}</td>
                                <td>{item.selectedcountry}</td>
                                <td>{item.T20score}</td>
                                <td>{item.odiscore}</td>
                                <td>{item.testscore}</td>                               
                            </tr>
                            )})}
                        </tbody>
                    </table>
                </div>
               
            );
        }
        
    

const mapStateToProps = (state) => {
    return {
        orderList: state.orderList
    }
}
export default connect(
    mapStateToProps
)(Show);
import React from 'react';
import {connect} from 'react-redux';
import {Link,BrowserRouter} from 'react-router-dom'
import {filter} from '../actions/Allactions'

function Show(props) {
    // console.log(props.playerDetails)
    // var index = Number(0);

    if(props.playerDetails){
        return(
            <BrowserRouter>
                <React.Fragment>
                    <div className="container">
                        <button className="btn btn-dark mt-3" onChange={()=>handleSort()}>Sort by T20 Score</button>
                        <div className="form-group col-3">
                            <label>Filter</label>
                            <select className="form-control" name="country">
                                <option value="India">India</option>
                                <option value="Australia">Australia</option>
                                <option value="England">England</option>
                                <option value="New zealand">News Zealand</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="West indies">West Indies</option>
                                <option value="Bangaladesh">Bangladesh</option>
                                <option value="UAE">UAE</option>
                                <option value="South Africa">South Africa</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                            </select>
                        </div>
                        <button className="btn btn-dark mt-3 ml-3">Ascending</button>
                        <button className="btn btn-dark mt-3 ml-3">Descending</button>
                        <div className="row mt-3">
                            <div className="col-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            {/* <th scope="col">Rank</th> */}
                                            <th scope="col">Name</th>
                                            <th scope="col">Country</th>
                                            <th scope="col">T20 Score</th>
                                            <th scope="col">ODI Score</th>
                                            <th scope="col">Test Score</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.playerDetails.map((e,index) =>{
                                            return(
                                                <tr >
                                                    <Link to={`Name${index}`}><td>{e.Name}</td></Link>
                                                    <td>{e.country}</td>
                                                    <td>{e.t20}</td>
                                                    <td>{e.odi}</td>
                                                    <td>{e.test}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </BrowserRouter>
        )
    }
}

function handleSort(props){
    if(props.playerDetails) {
        return(
           <div>
               {props.playerDetails.filter(props.target.value)}
           </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        playerDetails: state.players.playerData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filter : (country) => {
            console.log("filter applied")
            dispatch(filter(country))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)
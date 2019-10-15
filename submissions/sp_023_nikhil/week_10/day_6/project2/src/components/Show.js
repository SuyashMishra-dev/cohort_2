import React from 'react'
import { connect } from 'react-redux'
// import { Link, Route } from 'react-router-dom'

class Show extends React.Component {
    constructor(){
        super();
        this.state={
            sortCountry: ""
        }
    }
    
    filter = (e) => {
        this.setState({sortCountry:e})
    }

    render() {
        let data;
        if(this.state.sortCountry === ""){
            data = this.props.player
        }
        else {
            data = this.props.player.filter(elm => elm.country === this.state.sortCountry)
        }

        let playerInfo = data.map(elm => <h3>{elm.name}</h3>)
        
        return (
            <>
                <div style={{marginTop:"20px"}}>
                    <select onClick={(e) => {this.filter(e.target.value)}} >
                        <option value="" >All</option>
                        <option value="India" >India</option>
                        <option value="Pakistan" >Pakistan</option>
                        <option value="Afganistan" >Afganistan</option>
                        <option value="South Africa" >South Africa</option>
                        <option value="Australia" >Australia</option>
                        <option value="England" >England</option>
                        <option value="Sri Lanka" >Sri Lanka</option>
                        <option value="Bangladesh" >Bangladesh</option>
                        <option value="New Zealand" >New Zealand</option>
                        <option value="West Indies" >West Indies</option>
                    </select>
                </div>

                <table style={{background:"black", color:"white", borderRadius:"5px"}}>
                    <th>
                        <td>Name</td>
                        <td>Country</td>
                        <td>T20 Runs</td>
                        <td>ODI Runs</td>
                        <td>Test Runs</td>
                    </th>
                </table>

                {playerInfo}            
                
                {/* <Route /> */}

            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        player: state.data
    }
}


export default connect(mapStateToProps, null)(Show)
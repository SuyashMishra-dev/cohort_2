import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import Profile from './Profile'
import { Link, Route } from 'react-router-dom';

class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.player,
            sortCountry: "",
            sortFormat:""
        }
    }

    filter = (e) => {
        this.setState({ sortCountry: e })
    }

    sortRuns = (e) => {
        this.setState({sortFormat: e})
        console.log(this.state.sortFormat)
    }

    asc = () => {
        if(this.state.sortFormat === "t20" ) {
            let temp =  this.state.data.sort((a,b) => a.t20 - b.t20)
             this.setState({data:temp})
        }
        else if(this.state.sortFormat === "odi" ) {
            let temp =  this.state.data.sort((a,b) => a.odi - b.odi)
             this.setState({data:temp})
        } 
        else if(this.state.sortFormat === "test" ) {
            let temp =  this.state.data.sort((a,b) => a.test - b.test)
             this.setState({data:temp})
        } 
    }

    dec = () => {
        if(this.state.sortFormat === "t20" ) {
            let temp =  this.state.data.sort((a,b) => b.t20 - a.t20)
             this.setState({data:temp})
        }
        else if(this.state.sortFormat === "odi" ) {
            let temp =  this.state.data.sort((a,b) => b.odi - a.odi)
             this.setState({data:temp})
        } 
        else if(this.state.sortFormat === "test" ) {
            let temp =  this.state.data.sort((a,b) => b.test - a.test)
             this.setState({data:temp})
        } 
    }


    render() {
        let data;
        if (this.state.sortCountry === "") {
            data = this.state.data
        }
        else {
            data = this.state.data.filter(elm => elm.country === this.state.sortCountry)
        }

        let playerInfo = data.map(elm => {
            return (
                <table>
                    <tr>
                        <td><Link to={`/profile/${elm.name}`} >{elm.name}</Link></td>
                        <td>{elm.country}</td>
                        <td>{elm.t20}</td>
                        <td>{elm.odi}</td>
                        <td>{elm.test}</td>
                    </tr>
                </table>
            )
        })

        return (
            <>
                <div style={{ marginTop: "20px" }}>

                    <select onChange={(e) => { this.filter(e.target.value) }} >
                        <option value="" >--show by Country--</option>
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
                    <select onChange={(e) => {this.sortRuns(e.target.value)}}>
                        <option value="" >---sort by---</option>
                        <option value="t20" >T20</option>
                        <option value="odi" >ODI</option>
                        <option value="test" >Test</option>
                    </select>
                    <Button onClick={() => this.asc()}>Ascending</Button>
                    <Button onClick={() => this.dec()}>Decending</Button>
                </div>

                <table style={{ background: "black", color: "white", borderRadius: "5px" }}>
                    <th>
                        <td>Name</td>
                        <td>Country</td>
                        <td>T20 Runs</td>
                        <td>ODI Runs</td>
                        <td>Test Runs</td>
                    </th>
                </table>

                {playerInfo}

                <Route path="/profile/:id" render={data => <Profile {...data} />} />

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
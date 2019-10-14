import React from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'

class Show extends React.Component {
    filter = (e) => {
        this.props.player.filter(elm => elm.country === e)
    }

    render() {
        let name = this.props.player.map(elm => elm.name)
        let country = this.props.player.map(elm => elm.country)
        let t20Score = this.props.player.map(elm => elm.t20)
        let odiScore = this.props.player.map(elm => elm.odi)
        let testScore = this.props.player.map(elm => elm.test)

        return (
            <>
                <div style={{marginTop:"20px"}}>
                    <select onClick={(e) => { this.filter(e.target.value) }} >
                        <option>India</option>
                        <option>Pakistan</option>
                        <option>Afganistan</option>
                        <option>South Africa</option>
                        <option>Australia</option>
                        <option>England</option>
                        <option>Sri Lanka</option>
                        <option>Bangladesh</option>
                        <option>New Zealand</option>
                        <option>West Indies</option>
                    </select>
                </div>

                {/* <table>
                    <th>
                        <td>Name</td>
                        <td>T20 Runs</td>
                        <td>ODI Runs</td>
                        <td>Test Runs</td>
                    </th>
                    <tr>
                    </tr>
                </table> */}
                <Link to={"/"+ name} >{name}</Link>
                {country}
                {t20Score}
                {odiScore}
                {testScore}
                <Route path={"/" + name} render={() => {}} />
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
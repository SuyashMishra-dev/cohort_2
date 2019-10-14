import React from 'react'
import { connect } from 'react-redux'
// import { Link, Route } from 'react-router-dom'

class Show extends React.Component {
    filter = (e) => {
        this.props.player.filter(elm => elm.country === e)
    }

    render() {
        // let name = this.props.player.map(elm => <div><h4>{elm.name}{elm.country} {elm.t20} {elm.odi} {elm.test} </h4></div>)
        // let country = this.props.player.map(elm => elm.country)
        // let t20Score = this.props.player.map(elm => elm.t20)
        // let odiScore = this.props.player.map(elm => elm.odi)
        // let testScore = this.props.player.map(elm => elm.test)

        let info = JSON.parse(window.localStorage.getItem('player'))
        let data = info.map(elm => <li>{elm.name}</li>)

        // let data = info.map(elm => <li>{elm.name}</li>)
        console.log(info)
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

                {/* {name} */}
                {data}
                {/* {info} */}
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
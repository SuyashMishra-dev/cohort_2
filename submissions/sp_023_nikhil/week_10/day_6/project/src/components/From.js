import React from 'react'
import formAction from '../redux/fromAction'
import { connect } from 'react-redux'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pName: "",
            country: "",
            t20: 0,
            odi: 0,
            test: 0
        }
    }

    nameChange = (e) => {
        this.setState({ pName: e })
    }

    countryChange = (e) => {
        this.setState({country: e})
        console.log(this.state.country)
    }

    t20Change = (e) => {
        this.setState({ t20: e })
    }

    odiChange = (e) => {
        this.setState({ odi: e })
    }

    testChange = (e) => {
        this.setState({ test: e })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let info = {
            name: this.state.pName,
            t20: this.state.t20,
            odi: this.state.odi,
            test: this.state.test
        } 
        this.props.add(info);
    }

    render() { 
        return (
            <div>
                <form onSubmit={(e)=> this.handleSubmit(e.target.value) } >
                    <legend>
                        Player Name:
                    <input value={this.state.pName} onChange={(e) => this.nameChange(e.target.value)} type="text" />
                    </legend>
                    <legend>
                        Country:
                        <select onClick={(e) => {this.countryChange(e.target.value)}}>
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
                    </legend>
                    <legend>
                        T20 Score:
                    <input value={this.state.t20} onChange={(e) => this.t20Change(e.target.value)} />
                    </legend>
                    <legend>
                        ODI Score:
                    <input value={this.state.odi} onChange={(e) => this.odiChange(e.target.value)} />
                    </legend>
                    <legend>
                        Test Score:
                    <input value={this.state.test} onChange={(e) => this.testChange(e.target.value)} />
                    </legend>
                    <input type="submit" value="Click" />
                </form>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {

// }

const mapDispatchToProps = (dispatch) => {
    return {  
        add: (details) => dispatch(formAction(details))
    }
}

export default connect (null, mapDispatchToProps) (Form)
// connect (mapStateToProps, mapDispatchToProps)
import React from 'react'
import formAction from '../redux/fromAction'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            country: "",
            t20: 0,
            odi: 0,
            test: 0
        }
    }

    nameChange = (e) => {
        this.setState({ name: e })
    }

    countryChange = (e) => {
        this.setState({ country: e })
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
            name: this.state.name,
            country: this.state.country,
            t20: this.state.t20,
            odi: this.state.odi,
            test: this.state.test
        }
        this.props.add(info);
        this.setState({
            name: "",
            country: "",
            t20: 0,
            odi: 0,
            test: 0
        })
    }

    render() {
        return (
            <div style={{ marginLeft: "50px" }}>
                <h2>Add Player</h2>
                <form onSubmit={(e) => this.handleSubmit(e)} >
                    <TextField required style={{ marginBottom: "20px" }} label="Player Name" value={this.state.name} onChange={(e) => this.nameChange(e.target.value)} margin="normal" type="text" />

                    <legend>
                        Country:
                        <select required style={{ marginBottom: "20px" }} onChange={(e) => { this.countryChange(e.target.value) }}>
                            <option value="">---select country----</option>
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
                    </legend>
                    <TextField required style={{ marginBottom: "20px" }} label="T20 Score" type="number" onChange={(e) => this.t20Change(e.target.value)} />
                    <br />
                    <TextField required style={{ marginBottom: "20px" }} label="ODI Score" type="number" onChange={(e) => this.odiChange(e.target.value)} />
                    <br />
                    <TextField required style={{ marginBottom: "20px" }} label="Test Score" type="number" onChange={(e) => this.testChange(e.target.value)} />
                    <br />
                    <Button type="submit" color="primary" variant="contained">Add Player</Button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (details) => dispatch(formAction(details))
    }
}

export default connect(null, mapDispatchToProps)(Form)
import React from "react";
import { connect } from "react-redux"
import { insertAction,checkAction } from './Addele'


class TODO extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputval: '',
        }
    }
    handleChange = (val) => {
        this.setState({
            inputval: val.target.value
        })

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h3 >Enter to save</h3>
                    <input className="ml-5" onChange={(e) => this.handleChange(e)} value={this.state.inputval}></input>
                    <button  className="btn btn-success ml-5" onClick={() => this.props.add(this.state.inputval)}>ADD</button>
                </div>
                <div>
                    <div className="offset-2 mt-5 ">{this.props.value1.map((a,index)=>{
                        return <li className="col-xl-5 border row "><input onChange={()=>this.props.checks(index)} type={"checkbox"}></input><h4 style={{textDecorationLine:"line-through"}} className="text-primary">{a.data1}</h4></li>
                    })}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value1:state.saveditems
    }

}
const mapDispatchToProps = (dispatch) =>{
    return ({
        add: (data)=>dispatch(insertAction(data)),
        checks:(indexx)=>dispatch(checkAction(indexx))
    })
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TODO);
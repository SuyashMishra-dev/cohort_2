import React from "react"
import {connect} from "react-redux"
import {useradd} from './reducer'
class AddProduct extends React.Component{
    constructor(props){
        super(props)
        this.state={
                    name:"",
                    img:'',
                price:''
        }
    }
    handleChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render()
    {
        return(
            <div className="col-xl-4 ">
                <div className="col-xl-4 text-primary">
                        <label>Item_name</label>
                        <input onChange={(e)=>this.handleChange(e)} name={"name"}></input>
                </div>
                <br />
                <div className="col-xl-4 text-primary">
                        <label>Image:</label>
                        <input onChange={(e)=>this.handleChange(e)} name={"img"}></input>
                </div>
                <div className="col-xl-4 text-primary">
                        <label>Price:</label>
                        <input onChange={(e)=>this.handleChange(e)} name={"price"}></input>
                </div>
                <button className="btn btn-success ml-3 mt-3 " onClick={()=>this.props.cartadd(this.state)}>Add Item</button>
            </div>
        )
}
}
const mapDispatchToProps=(dispatch)=>{
    return{
       cartadd:(val)=>dispatch(useradd(val))
    }
    }
export default connect(
    null,
    mapDispatchToProps
)(AddProduct);
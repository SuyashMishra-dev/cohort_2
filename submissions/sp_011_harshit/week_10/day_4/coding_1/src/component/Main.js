import React from 'react'
import './../component/Main.css'
import {connect} from "react-redux"
import {add,sub,div,mul} from './../redux/actions'

class Main extends React.Component{
        constructor(props){
            super(props)
            this.state={
                        value:'',
                        ans:null,
                        operand1:null,
                        operation:null,
                        display:false
            }
        }
        
handleClick=(val)=>{
            if(val=="+")
            {
                console.log("hi im in add ")
                this.setState({
                    operand1:Number(this.state.value),
                    value:'',
                    operation:val
                })
            }
            if(val=='del')
            {
                this.setState({
                    value:'',
                    opertion:null,
                    operand1:null
                })
            }
            if(val=="x")
            {
                console.log("hi im in add ")
                this.setState({
                    operand1:Number(this.state.value),
                    value:'',
                    operation:val
                })
            }
            if(val=="/")
            {
                console.log("hi im in add ")
                this.setState({
                    operand1:Number(this.state.value),
                    value:'',
                    operation:val
                })
            }
            if(val=="-")
            {
                console.log("hi im in add ")
                this.setState({
                    operand1:Number(this.state.value),
                    value:'',
                    operation:val
                })
            }
            if(val=='=')
            {
              
                    if(this.state.operation=="+")
                    {
                    this.props.add1(this.state.operand1,Number(this.state.value))
                    this.setState({
                        value:'',
                        operation:'',
                        operand1:''
                    })
                    }
                    if(this.state.operation=='-')
                    {
                        this.props.sub1(this.state.operand1,Number(this.state.value))
                        this.setState({
                            value:'',
                            operation:'',
                            operand1:''
                        })
                    }
                    if(this.state.operation=='x')
                    {
                        this.props.mul1(this.state.operand1,Number(this.state.value))
                        this.setState({
                            value:'',
                            operation:'',
                            operand1:''
                        })
                    }
                    if(this.state.operation=='/')
                    {
                        this.props.div1(this.state.operand1,Number(this.state.value))
                        this.setState({
                            value:'',
                            operation:'',
                            operand1:''
                        })
                    }
            }
            if(val!='+'&&val!='='&&val!='-'&&val!='x'&&val!='/'&&val!='del')
            {
            this.setState({
                value:this.state.value+val 
             })
            }
    
}


render()
{
    return(
        <div>
            <div style={{width:"500px",marginLeft:"220px",marginTop:"30px"}}>
                <input style={{fontSize:"30px",marginLeft:"0px",width:"500px",height:"50px"}} value={this.state.value}></input>
                <h3>{this.state.operand1}</h3>
                <h3>{this.state.operation}</h3>
                <h3>{this.state.value}</h3>
      
            <h2>{this.props.ans1!=null ? (this.props.ans1):('')}</h2>
            </div>
        <div style={{marginLeft:"200px",marginTop:"20px"}}>
            
            <div className="flex">
                            <button onClick={()=>this.handleClick(1)}>1</button>
                            <button onClick={()=>this.handleClick(2)}>2</button>
                            <button onClick={()=>this.handleClick(3)}>3</button>
                            <button onClick={()=>this.handleClick("+")} style={{width:"200px",fontSize:"80px",backgroundColor:"grey",color:"white"}}>+</button>
            </div>
             <div className="flex"> 
             

                            <button onClick={()=>this.handleClick(4)}>4</button>
                            <button onClick={()=>this.handleClick(5)}>5</button>
                            <button onClick={()=>this.handleClick(6)}>6</button>
                            <button onClick={()=>this.handleClick("-")} style={{width:"200px",fontSize:"80px",backgroundColor:"grey",color:"white"}}>-</button>
            </div>
             <div className="flex">
                            <button onClick={()=>this.handleClick(7)}>7</button>
                            <button onClick={()=>this.handleClick(8)}>8</button>
                            <button onClick={()=>this.handleClick(9)}>9</button>
                            <button onClick={()=>this.handleClick("x")} style={{width:"200px",fontSize:"80px",backgroundColor:"grey",color:"white"}}>x</button>
            </div>  
            <div className="flex">
                            
                            <button onClick={()=>this.handleClick("=") } style={{width:"100px",fontSize:"80px",backgroundColor:"grey",color:"white"}}>=</button>
                            <button onClick={()=>this.handleClick(0)}>0</button>
                            <button onClick={()=>this.handleClick("del") }  style={{width:"110px",fontSize:"30px",backgroundColor:"grey",color:"white"}}>DEL</button>
                            <button onClick={()=>this.handleClick("/") }  style={{width:"190px",fontSize:"80px",backgroundColor:"grey",color:"white"}}>/</button>
            </div>  
           
        </div>
        </div>
     
    )
}
}
const mapStateToProps=(state)=>{
    console.log(state)
return{
  ans1:state.ans
}
}
const mapDispatchToProps=(dispatch)=>{
return{
   add1:(val1,val2)=>dispatch(add(val1,val2)),
   sub1:(val1,val2)=>dispatch(sub(val1,val2)),
   mul1:(val1,val2)=>dispatch(mul(val1,val2)),
   div1:(val1,val2)=>dispatch(div(val1,val2)),


}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
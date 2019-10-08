import React from 'react';

class Timer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count:100,
            start:false,
           data:[]
          
        }
    }

    handleClick =() => {
       clearInterval(this.count)
    }

    handleStartClick = () => {
          return(
            this.count=setInterval(() => {
              this.setState({
                  count:this.state.count-1
                  
              })
              if(this.state.count == 0){
                  alert("count is zero"); 
                  clearInterval(this.count)    
            }
            },1000)
          )
          
        }

        handleResetClick = () => {
            this.setState(prevstate =>({
            count:prevstate.count-prevstate.count
            }))
        }

    render() {
        const {count} =this.state
        return(
            <div>
            <h1 className=" font-weight-bolder ml-5" > Timer </h1>
               <div className="card bg-dark w-25 rounded ml-2">
                <h1 className="  text-white font-weight-bolder" style={{"height":"250px","marginLeft":"50px","textAlign":"center"}}> {count}</h1>
                <div className="float-left ml-5"  >
                <button className="bg-primary w-25 ml-4 rounded-pill" onClick={this.handleClick}>stop</button>
                <button  className="bg-primary w-25 ml-4 rounded-pill"onClick ={this.handleStartClick}> start</button>
                <button  className="bg-primary w-25 ml-4 rounded-pill" onClick ={this.handleResetClick}> reset</button>
                </div>
                </div>
            </div>
        )
    }
    componentWillMount(){
        clearInterval(this.count)
    }
    
}
export default Timer;


import React from 'react';

class StopWatch extends React.Component {
    constructor(props){
        super(props)
        this.state={
            count:0,
            start:false,
           data:[]
          
        }
    }

    handleClick =() => {
      
       clearInterval(this.count)
    
    }

    handleStartClick = () => {
        this.count=setInterval(() => {
            this.setState(prevstate =>({
            count:prevstate.count+10,
            start:true
            
        
          }))
        },10)
      
     }
     
        handleResetClick = () => {
            this.setState(prevstate =>({
            count:prevstate.count-prevstate.count
            
              
            }))
        }
    render() {
        const {count} =this.state
        // console.log(count)
        // const { count} = this.state;
         let centiseconds = ("0" + (Math.floor(count / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(count / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(count / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(count / 3600000)).slice(-2);
        // console.log(hours,minutes,seconds)

        return(
            <div>
            <h1 className=" font-weight-bolder ml-5" > STOPWATCH</h1>
               <div className="card bg-dark w-25 rounded ml-2">
                <h1 className="  text-white font-weight-bolder" style={{"height":"250px","marginLeft":"50px","textAlign":"center"}}> {hours} :{minutes}: {seconds} :{centiseconds}</h1>
                <div className="float-left ml-5"  >
                <button className="bg-primary w-25 ml-4 rounded-pill" onClick={this.handleClick}>stop</button>
                <button  className="bg-primary w-25 ml-4 rounded-pill"onClick ={this.handleStartClick}> start</button>
                <button  className="bg-primary w-25 ml-4 rounded-pill" onClick ={this.handleResetClick}> reset</button>
                </div>
                </div>
            </div>
        )
    }
    // componentDidMount() {
    //     this.count=setInterval(() => {
    //     this.setState(prevstate =>({
    //     count:prevstate.count+10,
    //     start:false
    //     // minutes: prevstate.count
    
    //   }))
    // } ,10)
    // }
    componentWillMount(){
        clearInterval(this.count)
    }
    
}
export default StopWatch;


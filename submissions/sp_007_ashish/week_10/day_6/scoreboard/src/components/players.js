import React from 'react';
import FinalDetail from './finaldetail';
class Players extends React.Component{
    constructor(props){
     super(props);{
     
     }
    }
    
    render(){
       
        return(
            // <div className="title">{this.props.i.player}</div>
            <div>
              <div class="row formtitle ">
                <div class="col-lg-5 " onClick={()=>{this.props.dsply(this.props.index)}}>
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Player Name:{this.props.i.player}</h5>
                        <p class="card-text"> Player country:{this.props.i.country}</p>
                        {/* <p class="card-text">{this.props.i.t20}</p>
                        <p class="card-text">{this.props.i.odi}</p>
                        <p class="card-text">{this.props.i.testscore}</p> */}
                       
                    </div>
                    </div>
                </div>
            </div>
           </div>
 
        );
    }
}
export default Players;
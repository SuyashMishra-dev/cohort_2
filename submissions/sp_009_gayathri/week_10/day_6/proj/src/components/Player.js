 import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addTotal} from './actions/playeractions'

class Player extends Component{

   
    handleAddTotal = (id)=>{
        this.props.addTotal(id);
    }
     render(){
              
        let addedScores = this.props.scores.length ?
            (  
                this.props.scores.map(score=>{
                    return(
                           <li className="scoreDet" key={score.id}>
                                 <div className="scorecard">
                                   <span className="title">{score.name}</span>
                                    <p>{score.twenty}</p>
                                    <p><b> {score.odi}</b></p> 
                                    <p>
                                    <b> {score.testScore}</b> 
                                        </p>
                                         </div>
                                    
                                </li>
                  
                    )
                })
            ):
             (
                <p>Data Empty</p>
             )
       return(
            <div className="container">
                <div className="player">
                    <h5>You have scored in Total:</h5>
                    <ul className="scoreDisp">
                        {addedScores}
                    </ul>
                </div> 
                 
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedScores,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        addTotal: (id)=>{dispatch(addTotal(id))}       
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Player)
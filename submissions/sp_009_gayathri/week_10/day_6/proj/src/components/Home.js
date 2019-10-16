import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addPlayer } from './actions/playeractions'

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addPlayer(id); 
    }

    render(){
        let scoreList = this.props.scores.map(score=>{
            return(
                <div className="card" key={score.id}>
                        <div className="card-image">
                          
                            <span className="card-title">{score.Name}</span>
                            <span to="/details"><button type="button" class="btn btn-primary">Click </button>
                            </span>
                        </div>

                        <div className="card-content">
                            <p><b>Name:{score.Name}</b></p>
                            <p><b>T20:{score.twenty}</b></p>
                            <p><b>ODI:{score.odi}</b></p>
                            <p><b>Test: {score.Testscore}</b></p>
                            
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">Player score</h3>
                <div className="box">
                    {scoreList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      scores: state.scores
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addPlayer: (id)=>{dispatch(addPlayer(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
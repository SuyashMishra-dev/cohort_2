import React from 'react';
import styles from './style.module.css';
import {connect} from 'react-redux';
import {firstNumberAdded} from '../actions/AllActions';

class Keys extends React.Component{
    constructor(){
        super();
        this.state = {
            firstNumber: '',
            operator: ''
        }
    }

    getNumber = (selectedNumber) => {
        this.setState({firstNumber: this.state.firstNumber + selectedNumber})
        this.props.firstNumberAdded(this.state.firstNumber + selectedNumber)
    }

    getOperator = (selectedOperator) => {
        this.setState({operator:selectedOperator})
        this.props.firstNumberAdded(this.state.firstNumber + selectedOperator)
    }

    render(){
        console.log(this.state.firstNumber)
        console.log(this.state.operator)
        return(
            <React.Fragment>
                <div className={styles.displayKeys}>
                    <div className={styles.numberKeys}>
                        <div>
                            <button onClick={()=>this.getNumber(0)}>0</button>
                            <button onClick={()=>this.getNumber(1)}>1</button>
                            <button onClick={()=>this.getNumber(2)}>2</button>
                        </div>
                        <div>
                            <button onClick={()=>this.getNumber(3)}>3</button>
                            <button onClick={()=>this.getNumber(4)}>4</button>
                            <button onClick={()=>this.getNumber(5)}>5</button>
                        </div>
                        <div>
                            <button onClick={()=>this.getNumber(6)}>6</button>
                            <button onClick={()=>this.getNumber(7)}>7</button>
                            <button onClick={()=>this.getNumber(8)}>8</button>
                        </div>
                        <div>
                            <button onClick={()=>this.getNumber(9)}>9</button>
                            <button className={styles.showKeys}>SHOW</button>
                        </div>
                    </div>
                    <div className={styles.operatorKeys}>
                        <div>
                            <button onClick={()=>this.getOperator('+')}>+</button>
                        </div>
                        <div>
                            <button onClick={()=>this.getOperator('-')}>-</button>
                        </div>
                        <div>
                            <button onClick={()=>this.getOperator('X')}>X</button>
                        </div>
                        <div>
                            <button onClick={()=>this.getOperator('/')}>/</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

function mapDispatchToProps(dispatch){
    return{
        firstNumberAdded: fData => dispatch(firstNumberAdded(fData))
    }
}

export default connect(null, mapDispatchToProps)(Keys)
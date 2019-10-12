import React from 'react';
import styles from "./calculator-grid.module.css";
import NumberButton from './number-button.component';

//redux
import { connect } from "react-redux";
import { joinAndCalculate,addOperation,calculate, getAnswer, deleteLast } from "../redux/calculator/calculator.actions";

class CalculatorGrid extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            buttons : [9,8,7,6,5,4,3,2,1,'.',0,'<--'],
            operators : ['+','-','/','='],
            operation : '',
            answer : '',
            show :false
        }
    }

    handleClick = (element) => {
        
        const {joinAndCalculate,operation,getAnswer,deleteLast} = this.props;
        if(this.state.operation.includes(operation[operation.length-1])){
            return false
        } else if ((operation=='')&&['/','='].includes(element)) {
            return false;
        }
        if (element === '=') {
            getAnswer();
        }else if(element=='<--'){
            
            deleteLast()

        } else {

            joinAndCalculate(element);
        }

    }

    toggleHistory = () => {
        this.setState({
            show : !this.state.show
        })
    }

    render() {
        const {operation, answer, calculate,history} = this.props;
        return (
            <>  
                <div className={styles.displayContainer}>
                    <div className={styles.flexItem+' '+styles.displayContainerInner}>
                        <div className={styles.displayOperation}>
                            {operation}
                        </div>
                        <div className={styles.displayAnswer}>
                           {answer}
                        </div>
                    </div>
                </div>
                <div className={styles.flexContainer}>        
                    <div className={styles.flexItem+' '+styles.numbersGrid}>
                        {this.state.buttons.map(button=>{
                            return (
                                <NumberButton handleClick={(e)=>this.handleClick(button)}>{button}</NumberButton>
                            )
                        })}
                    </div>
                    <div className={styles.operatorColumn}>
                        {
                            this.state.operators.map(operator=>{
                                return (
                                    <div onClick={(e)=>this.handleClick(operator)} className={styles.operatorItem}>{operator}</div>
                                )
                            })
                        }                        
                    </div>
                </div>  
                <div className={styles.historyContainer}>
                    <button onClick={this.toggleHistory} className={styles.historyButton}>
                            {this.state.show?'^':'v'}
                    </button>
                    <div className={`${styles.historyHidden} ${this.state.show?styles.historyShow:''}`}>
                            {history.map(op=>{
                                return (
                                    <>
                                    <div className={styles.historyItem}>{op}</div>
                                    <br />
                                    </>
                                )
                            })}
                    </div>
                </div>
                
            </>
          );
    }
}

const mapStateToProps = ({calculator : {history, operation, answer}}) => ({
    history,
    operation,
    answer
})

const mapDispatchToProps = dispatch =>({
    addOperation: (char)=>dispatch(addOperation(char)),
    joinAndCalculate : (char)=> dispatch(joinAndCalculate(char)),
    calculate : ()=>dispatch(calculate()),
    getAnswer : () => dispatch(getAnswer()),
    deleteLast : ()=>dispatch(deleteLast())
})

export default connect(mapStateToProps,mapDispatchToProps)(CalculatorGrid);

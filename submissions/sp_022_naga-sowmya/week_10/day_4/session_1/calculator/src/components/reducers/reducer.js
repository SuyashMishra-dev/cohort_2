import React from 'react'
import {Zero, One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Plus, Minus, Multiply, Divide, Equals, Clear} from '../actions/action'
import {connect} from 'react-redux'
import styles from './Styles.module.css'

const Reducer = props => {
    return (
        <div className={styles.body}>
            <h1>Calculator</h1>
            <h1 id={styles.input}>{props.value}</h1><br />
            {/* <input type="number" id="input1"></input><br />
            <input type="number" id="input2"></input><br /> */}
            <div>
                <button id={styles.clear} onClick={()=>props.clear()}>C</button>
                <button id={styles.plusminus}>+/_</button>
                <button id={styles.reminder}>%</button>
                <button id={styles.divide} onClick={()=>props.divide()}>/</button><br />
                <button id={styles.seven} onClick={()=>props.seven()}>7</button>
                <button id={styles.eight} onClick={()=>props.eight()}>8</button>
                <button id={styles.nine}onClick={()=>props.nine()}>9</button>
                <button id={styles.multiply} onClick={()=>props.multiply()}>*</button><br />
                <button id={styles.four} onClick={()=>props.four()}>4</button>
                <button id={styles.five} onClick={()=>props.five()}>5</button>
                <button id={styles.six} onClick={()=>props.six()}>6</button>
                <button id={styles.plus} onClick={()=>props.plus()}>+</button><br />
                <button id={styles.one} onClick={()=>props.one()}>1</button>
                <button id={styles.two} onClick={()=>props.two()}>2</button>
                <button id={styles.three} onClick={()=>props.three()}>3</button>
                <button id={styles.minus} onClick={()=>props.minus()}>-</button><br />
                <button id={styles.zero} onClick={()=>props.zero()}>0</button>
                <button id={styles.dot}>.</button>
                <button id={styles.equals} onClick={()=>props.equals()}>=</button><br />
            </div>
            {/* <h1 className={styles.history}>History</h1> */}
            <p></p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        value : state.reducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        zero : () => dispatch(Zero()),
        one : () => dispatch(One()),
        two : () => dispatch(Two()),
        three : () => dispatch(Three()),
        four : () => dispatch(Four()),
        five : () => dispatch(Five()),
        six : () => dispatch(Six()),
        seven : () => dispatch(Seven()),
        eight : () => dispatch(Eight()),
        nine : () => dispatch(Nine()),
        plus : () => dispatch(Plus()),
        minus : () => dispatch(Minus()),
        multiply : () => dispatch(Multiply()),
        divide : () => dispatch(Divide()),
        equals : () => dispatch(Equals()),
        clear : () => dispatch(Clear())
    } 
}

export default connect (
    mapStateToProps,mapDispatchToProps
)(Reducer)


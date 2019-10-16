import React from 'react';
import styles from './style.module.css';
import {connect} from 'react-redux';

function Display(props){
    return(
        <React.Fragment>
            <div className={styles.displayScreen}>
                <p>{props.fullFirstNumber}</p>
            </div>
        </React.Fragment>
    )
}

function mapStateToProps(state){
    return{
        fullFirstNumber: state.firstNumberAdded
    }
}

export default connect(mapStateToProps)(Display)
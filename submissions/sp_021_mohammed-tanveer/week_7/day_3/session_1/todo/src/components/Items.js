import React from 'react';
import styles from '../style.module.css'

function Items(props){

    let showData = props.data.map((eachData, i) => {
        let crossText = ''
        if(eachData.isFinished){
            crossText = {textDecoration: 'line-through'}
        }else{
            crossText = {textDecoration: 'none'}
        }
        return(
            <div className={styles.list}>
                <input type="checkbox" onChange={(e) => props.changefunc(e,i)} checked={eachData.isFinished} />
                <p style={crossText}>{eachData.name}</p>
                <button className={styles.remove} onClick={(e) => props.removefunc(e, i)}>Remove</button>
            </div>
        )
    })


    return(
        <React.Fragment>
            {showData}
        </React.Fragment>

    )
}

export default Items;
import React from 'react'
import styles from './app.module.css'

function button (props){
const data = props.buttondata
   return(
       <div className={styles.class1} >
          <button style = {{ backgroundColor: props.style }}>{data}</button>    
       </div>
   )
}
export default button
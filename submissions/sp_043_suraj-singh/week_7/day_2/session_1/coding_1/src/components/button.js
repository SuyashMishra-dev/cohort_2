import React from 'react'

const Button = (props) => {
        let i = -1
        return(
                <div style={{display: 'grid', gridTemplateColumns: '150px 150px', gridGap: '20px'}}>
                
                {props.items.colors.map(ele => {
                    
                    i++;
        return(
                <button key={ele.toString()} style={{backgroundColor:ele,color:'white'}}>{props.items.labels[i]}</button>)}
                
                )
        }
            </div>
        );
}

export default Button
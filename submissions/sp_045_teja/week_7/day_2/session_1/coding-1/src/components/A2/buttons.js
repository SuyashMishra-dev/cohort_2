import React from 'react'

const Button = (props) => {
        let i = -1
        return(
            <div style={{display: 'grid', gridTemplateColumns: '200px 200px', gridGap: '15px'}}>
             {props.items.colors.map(element => {
                i++;
        return(
                <button key={element.toString()} style={{backgroundColor:element,color:'white'}}>{props.items.labels[i]}</button>)}
             )

        }
            </div>
        );
}





export default Button
import React from 'react';

const Buttons = (props) => {
    // let color = props.color.map((el,i)=><button key={i.toString()+'id'} className={el}></button>)
    // let label = props.label.map((el,i)=><button key={i.toString()+'id'}>{el}</button>)
    return(


        // <div></div>
        <button style={{color:"white", background:props.color,borderRadius:"20px",width:"130px",margin:"15px"}}>{props.label}</button>
        // <ul>
        //     {list} 
        // </ul>
    );
}
export default Buttons;
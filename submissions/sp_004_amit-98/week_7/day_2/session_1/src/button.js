import React from 'react';

class Button extends React.Component{
    render(){
        return(
        <div className="flex">
       <button className="btn margin" style={{background:this.props.colors1}}>{this.props.label1}</button> 
        </div> 
        );
    }
}
export default Button
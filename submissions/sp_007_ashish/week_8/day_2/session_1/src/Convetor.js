import React from 'react';

class Convertor extends React.Component{
    constructor(props){
        console.log("got props "+props.unit);
        super(props);
        this.state={
          unit:this.props.unit
        }
        
    }
   render(){
       return(
          <div></div>
       );
   }
}
export default Convertor;
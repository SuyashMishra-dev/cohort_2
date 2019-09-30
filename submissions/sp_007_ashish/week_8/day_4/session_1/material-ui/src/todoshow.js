import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
class Todolist extends React.Component{
    // var checkedStyle ={
    //  color:"gray",
    //  textDecoration:"line-through"
    // }
    constructor(props){
        super(props);
        this.state={
         checkbox:false,

        }
        this.handleDelete= this.handleDelete.bind(this);
    }
    
     handleDelete = () => {
        this.props.del();
        
      };
    
   render(){
      console.log(this.props.Arr,this.props.ckhsts);
      // console.log("......."+this.props.Arr.checkStatus);
     var chk=this.props.Arr.checkStatus;
      console.log("isbar"+chk);
     var checkedStyle ={
         color:"gray",
         textDecoration:"line-through"
        }
       return(
            
           <React.Fragment>
              <div>
            <Checkbox
            checked={this.props.ckhsts.checkStatus}
            onChange={()=>this.props.chk(this.props.index,this.props.Arr)}
            value={this.state.checkedA}
            inputProps={{
            'aria-label': 'primary checkbox',
            }}
           />
           {/* <p style={{"textDecoration" :"line-through"}}>{this.props.Arr.itemName}</p> */}
           <Chip
           label={`${this.props.Arr.itemName}`}
           onDelete={()=>this.props.del(this.props.index)}
            color="primary"
            style={chk?{"textDecoration" :"line-through"}:null}
           />
          
           {/* {this.state.item.map((i)=>console.log({i}))} */}
           </div>
           </React.Fragment>
       );
   }
}
export default Todolist;
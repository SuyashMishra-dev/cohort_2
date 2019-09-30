import React from 'react'
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox';

const Display = (props) =>{
    console.log(props, 'hi')
    let decoration = ''
    let a = props.names.map((i,index)=>{
        if(i.check==true) {
      decoration = {textDecorationLine:"line-through"}
        }
        else
        {
             decoration = {textDecorationLine:"none"}
        }
     return  <div className="row">
          <Checkbox onChange={()=>props.check(index)} ></Checkbox>
         <h1 style={decoration}>{i.val}</h1>          
          <IconButton onClick={()=>props.deletebtn(index)}  aria-label="delete">
          <DeleteIcon  fontSize="large" />
        </IconButton>
     </div> 
     
    })
    return(
                <div className="container text-secondary offset-1">
                     {a}
                </div>
    )
}
export default Display;
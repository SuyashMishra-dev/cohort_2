import React from 'react';

class UserDetails extends React.Component{
    constructor(props){
        super(props);
      this.state={
          item:props,
          myArr:props.arr
      }
     //this.delteItem=this.delteItem,bind(this)
    }
  
    render(){
        console.log(this.state.item)
        console.log(this.state.myArr)
        return(
            <div style= {{"border":"2px solid black"}}>
              <div>Name::{this.state.item.name}</div>
             <div>Age :{this.state.item.age}</div>
             <div>Date of birth:{this.state.item.dob}</div>
             <div>Semester :{this.state.item.semsester}</div>
             <div>branch :{this.state.item.branch}</div>        
             <div> marks:{this.state.item.marks}</div>
             <div> badge No:{this.state.item.badgeno}</div>
             {/* <button onClick={this.delteItem(this.state.item.name)}>Delete</button> */}
             {/* <div>{Student.map((item)=>{return<UserDetail {...item} arr={Student} />})}</div> */}
    </div> 
        );
    }
    
}
{/* // const delteItem =(id)=>{
//     console.log("button clickded")
//     console.log(id);
//     item = item.filter((val)=>val.name!==id);
// } */}
export default  UserDetails;
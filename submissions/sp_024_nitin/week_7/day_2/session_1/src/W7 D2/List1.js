import React from 'react';

class List1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val1: props.obj1,
            val2: props.obj2
        };
                //console.log(this.state.val1.heading);
    }
    render() {
        return (
            <div>
               <h1>{this.state.val1.heading}</h1> 
               <ul>
                   <li>{this.state.val1.l1}</li>
                   <li>{this.state.val1.l2}</li>
                   <li>{this.state.val1.l3}</li>
                   <li>{this.state.val1.l4}</li>
               </ul>
               <h1>{this.state.val2.heading}</h1>
               <ul>
                   <li>{this.state.val2.l1}</li>
                   <li>{this.state.val2.l2}</li>
                   <li>{this.state.val2.l3}</li>
                   <li>{this.state.val2.l4}</li>
               </ul>
            </div>
        );
    }
}


export default List1;
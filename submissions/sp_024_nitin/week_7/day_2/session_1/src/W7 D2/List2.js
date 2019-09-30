import React from 'react';
import './buttons.css';

class List2 extends React.Component {
    constructor (props) {
        super(props);
        //console.log(props);
        this.state = {
            val1: props.obj3,
        };
        //console.log(this.state.val1);
    }
    render() {
        //console.log(this.props);
        return (
            <div className = "Shape">
                {this.props.obj3.map((item, index) => {
                     return <button style={{background:item.color}} className = "Design" key={index}>{item.label}</button>
                }) }
            </div>
        );
    }
}
export default List2;
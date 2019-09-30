import React from 'react';
import './Dontheduck.jpg';
import './Card.css';

class List3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val1: props.obj4,
        };
    }
    render() {
        const items = this.props.obj4.skillset.map((item) => {return (<p className = "btn btn-outline-primary mb-1 ml-1">{item}</p>);
    });
        return (
            <div className = 'backGround'>
            <div className = 'backGround1'>
                <p className = 'pro'>PRO</p>
                <img src = {'https://via.placeholder.com/100'} alt = "..." className = 'img'></img>
                <h3 className = 'H3'>{this.props.obj4.name}</h3>
                <h5 className = 'H5'>{this.props.obj4.location}</h5>
                <p className = 'p'>{this.props.obj4.description}</p>
             <div>
                <button className = 'btn btn-outline-primary mb-1 ml-1; Message'>Message</button>
                <button className = 'btn btn-outline-primary mb-1 ml-1; Following'>Following</button>
              </div>
              </div>
            <div className = 'skillsBox'>
                <h5 className = 'h5'>Skills</h5>
              </div>
            <div className = 'p-2'>
                {items}
              </div>
             </div>
        )
    }
}

export default List3;
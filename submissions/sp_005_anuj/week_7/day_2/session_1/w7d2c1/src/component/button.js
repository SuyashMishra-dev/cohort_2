import React from 'react';
import './button.css';
class Button extends React.Component {
    render() {
        return (

            <div>
                <button className="button" style={{ background: this.props.colors }}>{this.props.label}</button>
            </div>
        );
    }
}
export default Button
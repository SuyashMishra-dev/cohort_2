import React from "react";


class Button extends React.Component {
    render() {
        return(
            <div>
                <buttton style={{background: this.props.colors}}>{this.props.label}</buttton>
            </div>
        )
    }
}

export default Button;
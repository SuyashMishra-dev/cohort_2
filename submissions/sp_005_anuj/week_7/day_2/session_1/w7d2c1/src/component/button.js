import React from 'react';

class Button extends React.component{
constructor(props) {
    super(props)
    this.state = {
        label : ["JOINS US","SETTINGS","LOGIN","CONTACT US", "SEARCH", "HELP", "HOME", "DOWNLOAD", ],
    }
}
render() {
    return (
        <div>
            Hi
        </div>
    );
}
}
export default Button;
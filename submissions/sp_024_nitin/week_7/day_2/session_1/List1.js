import React from 'react';


class List1OS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            OS1: 'Android',
            OS2: 'BlackBerry',
            OS3: 'iPhone',
            OS4: 'Windows Phone' 

        }
    }
    render() {
        return (
            <div>
                <h1>Mobile Operating System</h1>
                <ul>
                    <li>{this.state.OS1}</li>
                    <li>{this.state.OS2}</li>
                    <li>{this.state.OS3}</li>
                    <li>{this.state.OS4}</li>
                </ul>
            </div>
        );
    }
}
class LIst1MF extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MF1: 'Samsung',
            MF2: 'HTC',
            MF3: 'MicroMax';
            MF4: 'Apple'
        }
    }
    render() {
        return (
            <div>
                <h1>Mobile Manufacturers</h1>
                <ul>
                    <li>{this.state.MF1}</li>
                    <li>{this.state.MF2}</li>
                    <li>{this.state.MF3}</li>
                    <li>{this.state.MF4}</li>
                </ul>
            </div>
        );
    
    }
  }

export default List1;
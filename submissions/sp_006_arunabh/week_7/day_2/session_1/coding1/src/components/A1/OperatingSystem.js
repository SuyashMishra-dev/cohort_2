import React from 'react';

class OperatingSystem extends React.Component{
    constructor(props) {
        //console.log(props)
        super(props)
    }

    render() {
        return(
            <div>
                <h3>{this.props.osInfo.heading}</h3>
                <ul>
                    <li>{this.props.osInfo.list1}</li>
                    <li>{this.props.osInfo.list2}</li>
                    <li>{this.props.osInfo.list3}</li>
                    <li>{this.props.osInfo.list4}</li>
                </ul>

                <h3>{this.props.makerInfo.heading}</h3>
                <ul>
                    <li>{this.props.makerInfo.list1}</li>
                    <li>{this.props.makerInfo.list2}</li>
                    <li>{this.props.makerInfo.list3}</li>
                    <li>{this.props.makerInfo.list4}</li>
                </ul>
            </div>
        );
    }
}



export default OperatingSystem;
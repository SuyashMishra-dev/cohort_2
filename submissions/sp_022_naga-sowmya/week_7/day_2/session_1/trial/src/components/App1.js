import React from 'react';

class Profile extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name : ["Mobile Operating System", "Mobile Manufacturers"],
            Mobiles: ["Android", "Blackberry", "iPhone", "Windows phone", "Smasung", "HTC", "Micromax", "Apple"]
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.name[0]}</h1>
                <ul>
                    <li>{this.state.Mobiles[0]}</li>
                    <li>{this.state.Mobiles[1]}</li>
                    <li>{this.state.Mobiles[2]}</li>
                    <li>{this.state.Mobiles[3]}</li>
                </ul>
                <h1>{this.state.name[1]}</h1>
                <ul>
                    <li>{this.state.Mobiles[4]}</li>
                    <li>{this.state.Mobiles[5]}</li>
                    <li>{this.state.Mobiles[6]}</li>
                    <li>{this.state.Mobiles[7]}</li>
                </ul>
            </div>
        );
    }
}
export default Profile;




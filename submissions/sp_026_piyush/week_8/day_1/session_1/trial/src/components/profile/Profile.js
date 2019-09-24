// import React from 'react';
// import './Profile.css'

// class Profile extends React.Component {
//     render() {
//         return (
//             <div>
//                 <img className="img" src={'https://avatars0.githubusercontent.com/u/20015769?s=460&v=4'} alt="User's portrait"/>
//                 <div className="name">Piyush Yadav</div>
//                 <div className="userName">piyush-git</div>
//                 <button className="btn rounded">Follow</button>
//                 <div>Bangalore, India</div>
//             </div>
//         );
//     }
// }

// export default Profile;

// ######################################
// Implemented the follow button functionality but only console logging that you followed someone
// import React from 'react';
// import './Profile.css'

// class Profile extends React.Component {
//     render() {
//         return (
//             <div>
//                 <img className="img" src={this.props.src} alt="User's portrait"/>
//                 <div className="name">{this.props.name}</div>
//                 <div className="userName">{this.props.userName}</div>
//                 <button className="btn rounded" onClick={() => this.props.follow(this.props.name)}>Follow</button>
//                 {/* this is a way to communicate back to a parent */}
//                 <div>{this.props.location}</div>
//             </div>
//         );
//     }
// }

// export default Profile;

//######################################


//######################################
// Will make and use a counter function

import React from 'react';
import './Profile.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: this.props.src,
            name: this.props.name,
            userName: this.props.userName,
            location: this.props.location,
            count: this.props.count
        }
    }

    handleOnclick = () => {
        // this.props.follow(this.state.name);
        this.setState({
            count: this.state.count + 1
        });

        this.props.follow(this.state.name, this.state.count);
    }

    render() {
        return (
            <div>
                <img className="img" src={this.state.src} alt="User's portrait"/>
                <div className="name">{this.state.name}</div>
                <div className="userName">{this.state.userName}</div>
                <button className="btn rounded" onClick={() => this.handleOnclick()}>Followers = {this.props.count}</button>
                {/* <button className="btn rounded" onClick={() => this.handleOnclick()}>Followers = {this.state.count}</button> */}
                {/* this is a way to communicate back to a parent */}
                <div>{this.state.location}</div>
            </div>
        );
    }
}

export default Profile;
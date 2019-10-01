import React from 'react';
import axios from 'axios';
import './Styles.css';

export default class FindUser extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: "arunabhthakur94",
            information: "",
            username: "",
            userid:"",
            score:"",
            imgurl:""
        }
    }

    handleName(key, value) {
        this.setState({
            [key]:value
        })
    }

    handleInfo() {
        this.componentDidMount(this.state.name);
        this.setState({
            username: this.state.information[0].login,
            userid: this.state.information[0].id,
            score: this.state.information[0].score,
            imgurl: this.state.information[0].avatar_url
        })
    }

    componentDidMount() {
        const url = "https://api.github.com/search/users?q="+this.state.name;
        axios.get(url)
        .then(res => {
            const data = res.data.items;
            // console.log(data[0].id);
            this.setState({
                information: data
            })
        })
        .catch(error => console.log(error))
    }

    render(){
        // console.log(this.state.name)
        // console.log(this.state.username)
        return(
            <div className="profile">
                <input 
                    type="text" 
                    placeholder="GitHub Username"
                    value={this.state.name}
                    onChange={e => this.handleName("name", e.target.value)} 
                />

                <input 
                    type="submit"
                    value="Find Details"
                    onClick={() => this.handleInfo()}
                />

                <div>
                    <p>Username: {this.state.username}</p>
                    <p>User ID: {this.state.userid}</p>
                    <p>Score: {this.state.score}</p>
                    <img src={this.state.imgurl} alt="Profile Pic" height="250" width="250" />
                </div>
            </div>
        )
    }
}
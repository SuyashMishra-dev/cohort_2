import React, { Component } from 'react';
// import Profile from '../Profile';
import axios from 'axios';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state= {
            value: '',
            data: '',
            status: false
        }
    }

    handleClick = () => {
        if(!this.state.value) {
            alert('Empty input');
            return 0;
        }
        // console.log(`${this.state.value}`)
        // axios.get(`https://api.github.com/search/users?q=${this.state.value}`)
        axios.get(`https://api.github.com/search/users`, {
            params: {
                q: `${this.state.value}`
            }
        })
        // .then(response => response.json())
        .then(response => {
            this.setState(
                {data: response.data.items,
                status: true});
            console.log(response.data.items)
        })
        // .then(data => console.log(data.items))
        // .then(data => this.setState({data: data.items,
        //                             status: true}))
    }

    render() {
        return (
            <div style={{margin: 200}}>
                API PAGE
                <div>
                    <input value={this.state.value} onChange={(event) => this.setState({value: event.target.value})}></input>
                    <button onClick={() => this.handleClick() }>Search</button>
                </div>
                <div>
                    {this.state.status?
                        // (<div>Not Empty</div>):
                        // (<div>Empty</div>)}
                        (<div>{this.state.data.map((item, index) => {
                            return (
                                // <div key={index}>{item.login} <img src={item.avatar_url}  style={{width: 100}} /></div>
                                <div key={index} className="">
                                    <img className="img" src={item.avatar_url} alt="User's portrait"/>
                                    <div className="name">{item.login}</div>
                                    <div className="userName">{item.login}</div>
                                    <a href={item.html_url}>
                                        <button className="btn rounded btn-primary">View Profile</button>
                                    </a>
                                </div>
                            );
                        })}</div>):
                        (<div>No Value Entered</div>)}
                </div>
            </div>
        );
    }
}

export default Search;
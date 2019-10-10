import React from 'react';
import Axios from 'axios';
import Items from './Components/Items';
import Fulllist from './Components/Fulllist';
import styles from './Components/style.module.css'

export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            query: '',
            data: [],
            userData: []
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({query:e.target.value})
    }

    handleClick = (e) => {
        e.preventDefault();
        // console.log(this.state.query)

        Axios('https://api.github.com/search/users?q=' + this.state.query)
        .then(response => {
            // console.log(response.data.items)
            this.setState({data: response.data.items})
            // console.log(this.state.data[0].id)
        })
        .catch(error => console.log(error))
    }

    moreInfo = (reposurl) => {
        Axios(reposurl)
        .then(response => {this.setState({userData: response.data})})
    }


    
    render(){
        return(
            <div className={styles.main}>
                <h1>Welcome to Git User Search</h1>
                <input type="text" placeholder="Enter Git Username" value={this.state.query} onChange={this.handleChange} />
                <button type="submit" onClick={this.handleClick}>Search a User</button>
                <Items gitData={this.state.data} getRepos={(e, reposurl) => this.moreInfo(e, reposurl)}/>
                <Fulllist fullData={this.state.userData}/>
            </div>
        )
    }
}
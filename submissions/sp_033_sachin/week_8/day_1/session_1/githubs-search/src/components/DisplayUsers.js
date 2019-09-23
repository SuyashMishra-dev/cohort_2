import React from 'react';
import axios from 'axios';


class DisplayUsers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user : {},
            isLoaded:false,
            reposLoading : 'false',
            loadedRepos : false,
            repos : []
        }
        this.getRepos.bind(this)
    }

    getRepos(){
        this.setState({
            reposLoading:true
        })
        axios.get(`https://api.github.com/users/${this.state.user.login}/repos`)
            .then(response=>{
                
                this.setState({
                    loadedRepos:true,
                    repos : response.data
                })
            })
            .catch(err=>{
                console.log(err)
            })
            .finally(()=>{
                this.setState({
                    reposLoading : false
                })
            })
    }

    componentDidMount() {
        this.setState({
            user : this.props.user,
            isLoaded:true
        })
    }

    render () {

        return (
            this.state.isLoaded?(<div className="col-md-12">
            <div className="row my-2">
                <div className="col-md-3">
                    <img className="w-100 h-100" src={this.state.user.avatar_url} alt="..." />
                </div>
                <div className="col-md-9">
                    <h4>Name : {this.state.user.login}</h4>
                    <p>Git URL : {this.state.user.url} </p>
                    {/* <button className="btn btn-primary btn-block">Get More Info</button> */}
                    <button onClick={()=>{this.getRepos()}} className="btn btn-primary btn-block">Get Repositories</button>
                </div>
            </div>
            {this.reposLoading?'Loading Repositories':''}
            <ul>
                {this.state.loadedRepos?this.state.repos.map((repo,i)=>{
                    
                    return (<li key={repo.id}>{repo.name} {repo.language}</li>)
                    
                }):''}
            </ul>
        </div>):''
        )
    }
}

export default DisplayUsers;
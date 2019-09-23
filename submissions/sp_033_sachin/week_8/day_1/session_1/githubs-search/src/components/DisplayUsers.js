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
            languages : [],
            repos : [],
            selectedLanguage : null
        }
        this.getRepos.bind(this)
        this.filterLanguage.bind(this)
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
            .then(()=>{
                let newArr = this.state.repos.map(repo=>repo.language);
                newArr = newArr.sort().filter((el,i,arr)=>el!==arr[i-1]);
                this.setState({
                    languages : [...newArr]
                })
            })
            .finally(()=>{
                this.setState({
                    reposLoading : false
                })
            })
    }

    filterLanguage(e){
        this.setState({
            selectedLanguage: e.target.value
        })
    }
    // els(){
    //     if (this.selectedLanguage === null) {

    //         if (this.state.loadedRepos) {
    //             return this.state.repos.map((repo,i)=>{
                    
    //                 return (<li key={repo.id}>{repo.name} {repo.language}</li>)
                    
    //             })
    //         } else {
    //             return ''
    //         }
            
    //     } else {
    //         if (this.state.loadedRepos) {
    //             return this.state.repos.filter(el=>el.language===this.state.language).map((repo,i)=>{                    
    //                 return (<li key={repo.id}>{repo.name} {repo.language}</li>)
    //             })

    //         } else {
    //             return ''
    //         }
    //     }
    // }

    componentDidMount() {
        this.setState({
            user : this.props.user,
            isLoaded:true
        })
    }

    render () {
        
        let els = ''
        if((this.state.selectedLanguage === null)&&(this.state.loadedRepos)){
            els = this.state.repos.map((repo,i)=>{
                    
                    return (<li className="list-group-item" key={repo.id}>{repo.name} {repo.language}</li>)
                                
            })
        } else if (this.state.loadedRepos){
            els = this.state.repos.filter(el=>el.language===this.state.selectedLanguage).map((repo,i)=>{
                    
                return (<li className="list-group-item" key={repo.id}>{repo.name} {repo.language}</li>)
                            
            })
        }

        return (
            this.state.isLoaded?(<div className="col-md-12">
            <div className="row my-2">
                <div className="col-md-3">
                    <img className="w-100 h-100" src={this.state.user.avatar_url} alt="..." />
                </div>
                <div className="col-md-9 border">
                    <h4>Name : {this.state.user.login}</h4>
                    <p>Git URL : {this.state.user.url} </p>
                    <p>Score : {this.state.user.score}</p>
                    {this.state.loadedRepos?<select onChange={(e)=>{this.filterLanguage(e)}}>{this.state.languages.map((lang,i)=>{
                    
                    return (<option key={"#"+i} value={lang}>{lang}</option>)
                    
                    })}</select> : ''}
                    {/* <button className="btn btn-primary btn-block">Get More Info</button> */}
                    <button onClick={()=>{this.getRepos()}} className="btn btn-primary btn-block">Get Repositories</button>
                </div>
            </div>
            {this.reposLoading?'Loading Repositories':''}
            <ul className="list-group">
                {els}
            </ul>
        </div>):''
        )
    }
}

export default DisplayUsers;
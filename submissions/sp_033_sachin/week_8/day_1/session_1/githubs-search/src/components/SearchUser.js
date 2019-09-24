import React from 'react';
import axios from 'axios'
import DisplayUsers from './DisplayUsers'

class SearchUser extends React.Component{
    constructor() {
        super();
        this.state = {
            name: '',
            users : [],
            isLoading : false,
            loaded : false
        }
        this.getUsers.bind(this);
        this.getInputNameValue.bind(this)
    }
    
    getInputNameValue(e){
        this.setState({
            name : e.target.value
        })
    }

    getUsers() {
        const reqParam = {
            method : 'get',
            url : 'https://api.github.com/search/users',
            params : {
                q : this.state.name
            }
        }
        this.setState({
            isLoading : true
        })
        axios(reqParam)
            .then(response=>{
                this.setState({
                    items : response.data.items,
                    loaded : true
                })
            })
            .catch(err=>{
                console.log(err)
            })
            .finally(()=>{
                this.setState({
                    isLoading : false,                    
                })
            });
    }

    render() {
        let loading = ''
        this.state.isLoading ? loading = 'Loading' : loading='';

        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <input onChange={(event)=>{this.getInputNameValue(event)}} value={this.state.value} className="form-control" type="text" placeholder="Enter Name" />                    
                    </div>
                    <div className="offset-md-2 col-md-4">
                        <button onClick={()=>this.getUsers()} className="btn btn-success btn-block">Search</button>
                    </div>                
                </div>
                <h1 className="text-center">{loading}</h1>
                <div className="row">
                    
                    {this.state.loaded?this.state.items.map(item=> <DisplayUsers key={item.id} user={item} />):''}
                </div>
            </div>
            

        )
    }
}

export default SearchUser;
import React from 'react'
import axios from 'axios'

const Github = props => {
    return(
        <div className="text-center">
            <div>{props.name}</div>
            <div>
                {props.items.map(item => {
                    return (
                        <div>
                            <div className="mt-3 border border-primary"><h2>Login_ID : {item.login}</h2>
                            <h3>Score : {item.score}</h3></div>
                            <img src={item.avatar_url} className="mt-3 border border-dark rounded-circle" alt="image"></img><br/>
                            <a className="mt-3 btn btn-success"onClick={(e)=>{props.func(e,item.html_url)}} href={item.html_url}>More</a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

class github extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : [],
            status : false,
            username : '',
            info : ''
        }
    }
    
    show = (val) => {
        const param2 = {
            method : "get",
            url: val
        }
        axios(param2) 
        .then(Response => {
            console.log(Response)
            this.setState({
                info : Response
            });
        })
        .catch(err => console.log(err));
    }
    
    handleName = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleClick = ()=> {
        const requestParam = {
            method : "get",
            url : "https://api.github.com/search/users?q="+this.state.username
        }
        axios(requestParam)
        .then(Response => {
            console.log(Response);
            this.setState({
                data : Response.data,
                status : true
            });
        })
        .catch(err => console.log(err));
    }
       
    
    render() {
        return (
            <div className="text-center">
                <input className="mt-3 ml-3" onChange={(e)=>this.handleName(e)}></input><br/>
                <button type="button" onClick={()=>this.handleClick()} className="search" className= "mt-3 btn btn-primary">Search</button>
                {this.state.status ? (
                    <Github {...this.state.data} func={(e,x)=>this.show(x)}/>
                ) : (
                    <h4 className="mt-3">If Search button is clicked I will show the result</h4>
                ) }
            </div>
        );
    }
}

export default github;


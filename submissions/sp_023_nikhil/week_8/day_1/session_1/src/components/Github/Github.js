import React from 'react';

class Github extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
        repo info 
        }
    }
    getRepos = () => {
        const reqParams = {
            methos: 'get',
            url: this.props.repo,
        
        }
        axios(this.props.repo)
            .then(response => {
                this.settState({
                    
                })
            })
    }
    render() {
    // const Github = (props) =>{
        return (
            <div>
                <div className="card mt-4 mx-5" style={{ width: "18rem" }}>
                    <img src={this.props.picture} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        {/* <p className="card-text"></p> */}
                        <button onclick={()=>getRepos()}  className="btn btn-success"><a href={this.props.repo} >Repos</a></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Github
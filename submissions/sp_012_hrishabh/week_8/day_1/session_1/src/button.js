import React from 'react';
import './App.css';
import axios from 'axios'

const UserList = props => (
  <div>
  <div className = "bg-success rounded score">{props.score}</div>
  <img src={props.avatar_url} className="card-img-top  img" alt="..."></img>
  <div className="card-body">
   <h5 className="card-title">{props.login}</h5>
   <div className = "w-50">
     <p className="card-text">UserId = {props.id}</p>     
   </div> 
   <a href={props.html_url} className="btn btn-primary">Click To More Details</a>
 </div>
 <hr></hr>
</div> 
  );

export default class SearchBar extends React.Component {
    constructor (props) {   
        super(props);
        this.state = {
            data: [],
            value: '',
            
        };
      this.callUserSearch = this.callUserSearch.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    getInfomation () {
       console.log(this.state.data.item.url);
    }

    callUserSearch(){
      // this.handleChange(value);
        // This is placed inside 
        // var getQuries = document.getElementById('getQuries').value;
        // console.log(getQuries)
        var get = this.state.value;
        console.log(get)
        axios.get("https://api.github.com/search/users?q=" + get)
        .then(res => {
          const data = res.data.items;
          console.log(data);
          this.setState({
            data: data
          });
        })
        .catch(error => console.log(error))
    }
    
    render () {
        return (
            <div>
                <img style = {{height : "50px"}} className = "w-25" src = "https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" alt = "logo"></img>
                <input onChange={this.handleChange}  id = "getQuries" className = "w-50 m-5" type = "text" placeholder = "Enter Your UserName" value={this.state.value}></input>
                <button onClick = {this.callUserSearch} className = "btn text-white btn-primary">Search User</button>
                {
                    this.state.data.map((item, index) => {
                        // console.log(item);
                        return (
                          <div className = "d-flex">
                            <UserList {...item} />
                          </div>
                        )
                        
                    
                      })
                }
            </div>
        );
    }
}
// export default SearchBar;
// export default ;




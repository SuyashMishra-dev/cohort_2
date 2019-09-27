import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import styles from './styles.module.css'

const UserList = props =>(
    <h5 key = {props.id.value}> name:{props.name}, email:{props.email}</h5>
)

class Input extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        };
    }
    componentDidMount(){
        axios
        .get("https://api.github.com/search/users?q=3")
        .then(res => {
            const data = res.data.q;
            console.log(data);
            this.setState({
                data:data
            });
        })
        .catch(error => console.log(error));
    }

    render(){
        return(
            <div>
                {this.state.data.map((item) =>{
                    console.log(item);
                    return<UserList{...item}/>;
                })}
            </div>
        );
    }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Input />, rootElement);
export default Input;

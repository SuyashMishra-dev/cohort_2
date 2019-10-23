import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';
import AddData from './AddData';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            status: false,
            newData: []

        }
    }

    fetchData = () => {
        const url = 'https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json';
        axios.get(url)
            .then(response => {
                this.setState({
                    data: response.data,
                    status: true
                })
                console.log(this.state.data);
            })
    }

    componentDidMount() {
        this.fetchData();
    }

    handleOnClickName = (element) => {
        console.log(element.name, element.code)
    }



    render() {
        let counter = 0;
        // console.log('hello');
        // this.fetchData();
        // console.log(this.state.data)
        return (
            <div className="text">
                Countries Page
                <div>
                    <button className="btn btn-primary">Data</button>
                </div>
                <div>
                {this.state.status ? this.state.data.map(element => 
                    <div key={counter++} onClick={() => this.handleOnClickName(element)}>
                    {/* // <div key={counter++} onClick={() => <AddData />}> */}
                        <span>{element.name} </span> 
                        <span> {element.code}</span>
                    </div>) 
                    : null}
                </div>
            </div>
        );
    }
}

export default Home;
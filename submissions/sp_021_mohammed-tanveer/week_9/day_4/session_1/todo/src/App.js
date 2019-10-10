import React from 'react';
import Items from './components/Items';
import styles from './style.module.css'

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            userInput: '',
            data: []

        }
    }

    inputChange = (e) => {
        e.preventDefault();
        this.setState({userInput:e.target.value})
    }

    dataSubmit = (e) => {
        e.preventDefault();
        this.setState({data: [...this.state.data, {name: this.state.userInput, isFinished: false}], userInput: ''})
    }

    changeStatus = (id) => {
        let temp = this.state.data.filter((ele, i) => {
          if(id == i){
            ele.isFinished = !ele.isFinished
          }
          return ele;
        })
        this.setState({data:temp})
      }
    
      removeitem = (id) => {
        let temp = this.state.data.filter((ele, i) => i != id);
        this.setState({data:temp})
      }

    render(){
        return(
            <div className={styles.formDiv}>
                <h1>React: Todo List</h1>
                <form onSubmit={this.dataSubmit}>
                    <input className={styles.input} type="text" placeholder="Add Somehting" value={this.state.userInput} onChange={this.inputChange}/>
                    <button className={styles.submit}>Add to List</button>
                </form>
                <Items data={this.state.data} changefunc={(e,i) => this.changeStatus(i)} removefunc={(e, i) => this.removeitem(i)}/>
            </div>
        )
    }
}

export default App;
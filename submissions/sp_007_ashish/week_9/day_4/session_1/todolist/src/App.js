import React ,{ Component } from "react";

import Todo from  './todo'

class App extends Component{
    render(){
        return(
            <div className="app">
                <h1>Redux Todo Example</h1>
                 <Todo />
            </div>
        );
    }
}
export default App;
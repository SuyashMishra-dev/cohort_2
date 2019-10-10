import React from "react";
import Styles from "./Styles.css";
import ReactDOM from "react-dom"

export default class Calculator extends React.Component{
    render(){
        return(
            <div>
                <h1 className = "head">Let's Do Calculatios Here..!</h1>
                <button className = "btn" onClick = {(e) => this.handleClick(e.target.value)}>1</button>
                <button className = "btn">2</button>
                <button className = "btn">3</button>
                <button className = "btn">+</button><br/>

                <button className = "btn">4</button>
                <button className = "btn">5</button>
                <button className = "btn">6</button>
                <button className = "btn">-</button><br/>

                <button className = "btn">7</button>
                <button className = "btn">8</button>
                <button className = "btn">9</button>
                <button className = "btn">=</button><br/>

                <button className = "btn">0</button>
                <button className = "btn">*</button>
                <button className = "btn">%</button><br/>
                <button className = "btn">Enter</button>
            </div>
        )
    }
}
const rootElement = document.getElementById('root');
const render = () => ReactDOM.render(<App/>,rootElement);
render();
store.subscribe(render)
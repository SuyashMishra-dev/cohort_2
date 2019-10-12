import React from "react"
import ReactDOM from "react-dom"
import Calculator from "./component/calculator.js"
import './component/style.css'
// import History from "./history"

export default class App extends React.Component{
    render(){
        return(
            <div>
                <Calculator></Calculator>
            </div>
        )
    }
}

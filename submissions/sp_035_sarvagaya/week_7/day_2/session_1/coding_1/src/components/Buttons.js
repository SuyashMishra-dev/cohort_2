import React from "react";
import "./Buttons.css";

function Buttons(props)
{
    console.log(props.list)
    return(
        <div style={{marginLeft: 550}}>
            <div style={{width:100}}>
                <button className="btn" style={{background: props.blist.color[0]}}>{props.blist.label[0]}</button>
                <button className="btn" style={{background: props.blist.color[1]}}>{props.blist.label[1]}</button>
                <button className="btn" style={{background: props.blist.color[2]}}>{props.blist.label[2]}</button>
                <button className="btn" style={{background: props.blist.color[3]}}>{props.blist.label[3]}</button>
            </div>
            <div style={{width: 100, marginLeft: 150, marginTop: -200}}>
            <button className="btn" style={{background: props.blist.color[4]}}>{props.blist.label[4]}</button>
            <button className="btn" style={{background: props.blist.color[5]}}>{props.blist.label[5]}</button>
            <button className="btn" style={{background: props.blist.color[6]}}>{props.blist.label[6]}</button>
            <button className="btn" style={{background: props.blist.color[7]}}>{props.blist.label[7]}</button>
            </div>
        </div>
    )
}

export default Buttons;
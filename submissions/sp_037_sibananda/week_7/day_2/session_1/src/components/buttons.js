import React from 'react'
// import ReactDOM from 'react-dom'

const Buttons = (props) => {
    let buttonstyle = { "height": "40px", "width": "160px", "border-radius": "25px", "text-align": "center", "padding": "5px", "margin": "5px", "padding": "5px", }

    return (
        <div style={{ "display": "flex", "flex-flow": "row wrap","width":"35%" }}>
            {props.Buttondata.map((button) =>
                <div style={{ ...buttonstyle, 'background': button.color }}>
                    <div style={buttonstyle}>{button.label}
                    </div>

            </div>)}
        </div>
    )
}
export default Buttons;
import React from 'react';

const filter = (e, id) => {
    console.log(id);
}

const Buttons = (props) => {
    return(
        <div>
            {props.filterItems.map(ele => {
                return(
                    <button className="btn btn-primary" key={ele.toString()} onClick={(e) => filter(e, ele)}>{ele}</button>
                )
            })}
        </div>
    )
}

export default Buttons;
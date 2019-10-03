import React from 'react';

const FooterList = (props) => {
    return (
        <div className="col m3">
            <p style={{fontWeight: 'bolder'}}>{props.data.heading}</p>
            <ul>
                {props.data.items.map(ele => <li>{ele}</li>)}
            </ul>
        </div>
    )
}

export default FooterList;
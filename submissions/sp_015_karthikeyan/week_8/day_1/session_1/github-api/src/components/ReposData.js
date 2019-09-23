import React from 'react';

const ReposData = props => {
    let repos = props.data.map(ele => {
        return <a href={ele.html_url} class="list-group-item list-group-item-action" target = "_blank">{ele.name}</a>
    })
    return (
        <ul className = "list-group">
            {repos}
        </ul>
    )
}

export default ReposData;
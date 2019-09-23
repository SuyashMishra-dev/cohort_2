import React from 'react';

const Display = props => (
    <div>
        <div>
            <img src={props.avatar_url} width="200" />
            <h3>Username: {props.login}</h3>
            <button id={props.login}>Show Details</button>
        </div>
    </div>
  );

export default Display;
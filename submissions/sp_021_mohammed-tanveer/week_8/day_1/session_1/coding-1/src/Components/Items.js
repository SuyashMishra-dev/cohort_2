import React from 'react';
import styles from './style.module.css'

function Items(props){

    let showAllUsers = props.gitData.map(eachUser => {
        
        return(
            <div className={styles.each}>
                <img src={eachUser.avatar_url} width="150"/>
                <p>Login ID: {eachUser.login}</p>
                <button onClick={() => props.getRepos(eachUser.repos_url)} >Full Profile</button>
            </div>
        )
    })
    return(
        <React.Fragment>
            {showAllUsers}
        </React.Fragment>
    )
}

export default Items;
import React from 'react';
import styles from './mystyle.module.css';

function Login (){
    return(
        <div className={styles.pageheader}>
            <h1>Sign in</h1>
            <div>
                <label>Username </label>
                <input className={styles.forminput} type="text" placeholder="Enter Your Username"/><br/>
                <label>Password </label>
                <input className={styles.forminput} type="password" placeholder="Enter Your Password" /><br/>
                <button className={styles.formbutton}>Sign In</button>
            </div>
        </div>
    )
}

export default Login;
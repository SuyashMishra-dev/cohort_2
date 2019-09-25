import React from 'react';
import { Route, Link, BrowserRouter } from "react-router-dom";
import styles from './mystyle.module.css';


function Navbar(props){
    let linkTag = props.sendNav.map((linkData) => <Link className={styles.navlinks} to={linkData.link}>{linkData.name}</Link>)
    return(
        <div className={styles.navbar}>
           {linkTag} 
        </div>
    )
}

export default Navbar;
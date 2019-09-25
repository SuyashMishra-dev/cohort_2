import React from 'react';
import styles from './mystyle.module.css';

function About (){
    return(
        <div className={styles.pageheader}>
            <h1>About Us</h1>
            <p>Dunzo can change the way you move things, how you shop and lets you access your city like never before. We’re an app that connects you to the nearest delivery partner who can make purchases, pick up items from any store or restaurant in the city and bring them to you.<br/><br/>It’s never easy to make purchases or drop off packages when you get busy with work, get stuck in traffic, or you might even end up forgetting about it completely.</p>
        </div>
    )
}

export default About;
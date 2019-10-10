import React from 'react';
import '../PageStyle.css';
import {Link} from 'react-router-dom';

export default class MacHome extends React.Component{
    render(){
        return(
            <div className = "col content1">
                <h1>iPhone 11 Pro</h1>
                <h3>Pro cameras. Pro display. Pro performance</h3>
                <p>From $24.95/mo. or $599 with trade-in.*</p>
                <Link to ="/component/InternalComponent/HomeComponent/learnmore">Learn more > </Link>
                <Link to = "/component/InternalComponent/HomeComponent/buy"> Buy ></Link>
                <img src="https://boygeniusreport.files.wordpress.com/2019/05/iphone-11-techy-paradise-3.jpg?quality=98&strip=all" alt="Show" height="300"/>
            </div>
        )
    }
}
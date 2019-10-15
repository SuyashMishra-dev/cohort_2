import React from 'react';
import  './fotter.css';

export default class Fotter extends React.Component {
    render() {
        return (
            <div className="ml-5 mr-5 mt-5 border-top"> 
               <nav class="navbar navbar-light bg-light">
                   <span></span>
                    <span class="navbar-text ml-5 text-center">
                    “Nothing is black-and-white, except for winning and losing, and maybe that’s why people gravitate to that so much.”                   </span>
                    <hr/>
                
                    </nav>
               
                <div className=" first">
            
            <p > +91 80 4040 2020</p>
            <p>© 2010 - 2019, Sports Community.<br/>

                All rights reserved.</p>
    
            <a href="https://twitter.com/login?lang=en"><img className="logoImg" src="https://image.flaticon.com/icons/png/512/23/23931.png"></img></a>
            <a href="https://www.facebook.com/"><img  className="logoImg" src="https://image.flaticon.com/icons/png/512/33/33702.png"></img></a>
            <a href="https://www.instagram.com/accounts/login/"><img className="logoImg" src="https://image.flaticon.com/icons/png/512/87/87390.png"></img></a>
            <a href="https://www.linkedin.com"><img className="logoImg" src="https://www.iconninja.com/files/902/874/330/black-linkedin-icon.png"></img></a>
        </div>
        <div className="address">
            <p>
                <strong>Address:-</strong>
                <br/>91 spring board, <br/>
                Kormangala, Bangalore, Karnataka <br/>560065
            </p>
        </div>
         
          </div>
        )
    }
}   
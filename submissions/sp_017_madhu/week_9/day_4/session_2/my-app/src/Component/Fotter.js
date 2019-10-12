import React from 'react';
import  './fotter.css';

export default class Fotter extends React.Component {
    render() {
        return (
            <div className="ml-5 mr-5 mt-5 border-top"> 
               <nav class="navbar navbar-light bg-light">
                   <span></span>
                    <span class="navbar-text ml-5 text-center">
                    A Release is like a boat. 80% of the holes plugged is not good enough.                    </span>
                    <hr/>
                

                <table class="table mr=-5 table-borderless table-light">
                    <thead>
                        <tr>
                        <th scope="col">Explore</th>
                        <th scope="col">Services</th>
                        <th scope="col">For Business</th>
                        <th scope="col">Help and Support</th>
                        <th scope="col">About</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Data</td>
                        <td> Music</td>
                        <td>Help and Business</td>
                        <td>Recycling</td>
                        <td>Leadership</td>
                        </tr>

                        <tr>
                        <td>Investors</td>
                        <td></td>
                        <td></td>
                        <td>Newsroom</td>
                        <td>Job Opportunities</td>

                        </tr>
                        <tr>
                        <td>iPhone</td>
                        <td>Apple Arcade</td>
                        <td>Thornton</td>
                        <td>Newsroom</td>
                        <td>Investors</td>
                        </tr>

                        <tr>
                        <td>Watch</td>
                        <td>iCloud</td>
                        <td>Thornton</td>
                        <td></td>
                        <td>Contact Apple</td>
                        </tr>

                        
                    </tbody>
                </table>
                </nav>

                <div className=" first">
            
            <p > +91 80 4040 2020</p>
            <p>© 2010 - 2019, Helping Hands.<br/>

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
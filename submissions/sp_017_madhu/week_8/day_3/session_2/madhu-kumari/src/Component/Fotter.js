import React from 'react';

export default class Fotter extends React.Component {
    render() {
        return (
            <div className="ml-5 mr-5 mt-5"> 
               <nav class="navbar navbar-light bg-light">
                    <span class="navbar-text">
                        *Apple Arcade and Apple TV+ require a subscription. Apple Arcade is now available on iPhone, iPad and Apple TV, and will be available on Mac later this year.
                    </span>
                    <hr/>
                

                <table class="table mr=-5 table-borderless table-light">
                    <thead>
                        <tr>
                        <th scope="col">Explore</th>
                        <th scope="col">Services</th>
                        <th scope="col">For Business</th>
                        <th scope="col">Apple Programs</th>
                        <th scope="col">About Apple</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Mac</td>
                        <td>Apple Music</td>
                        <td>Apple and Business</td>
                        <td>Recycling</td>
                        <td>Apple Leadership</td>
                        </tr>

                        <tr>
                        <td>iPad</td>
                        <td>Apple TV+</td>
                        <td>iPhone</td>
                        <td></td>
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
            </div>
        )
    }
}   
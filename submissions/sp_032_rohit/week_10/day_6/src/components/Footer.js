import React from 'react';
import {Link} from "react-router-dom";
export default class Footer extends React.Component {
    render() {
        return (

            <div className="bg-light">
                <div className="mt-5 mb-5 row border-top pt-4">
                    
                    <div className="col-md-2">
                    </div>

                    <table className="table table-borderless col-md-8">
                        <tr>
                            <th scope="row"></th>
                            <th><img src="https://2.bp.blogspot.com/-OYLuw_q9gms/XMRNmAbayiI/AAAAAAAAAko/SVAuE9Swfmkh8rnTJvaNsf8DGBCmV_i3gCLcBGAs/s1600/Screenshot_2019-04-27-18-08-43-760_com.instagram.android.png" height="70px"  className="d-inline-block align-top" alt="Hello" /></th>
                            <th><Link to="/support" className="navbar-brand">Need Help?</Link></th>
                            <th><Link to="/Show" className="navbar-brand">Show all Players</Link></th>
                        </tr>

                        <tbody>
                            <tr>
                                <th scope="row"></th>
                                <td>+91 80 1234 5678</td>
                            </tr>

                            <tr>
                                <th scope="row"></th>
                                <td>Address: Bhive Workspace,Hosur Road, Koramangla, Bangalore</td>
                            </tr>

                        </tbody>
                    </table>
                    </div>

                    <div>
                <div className="mt-5 mb-5 row border-top pt-4">
                    
                    <div className="col-md-2">
                    </div>

                    <table className="table table-borderless col-md-8">
                        <tbody>
                        
                    <tr>
                                <th scope="row"></th><small>
                                <td>Terms of service</td>
                                <td>Privacy policy</td>
                                <td>Copyright ©  Inc. All Rights Reserved.</td>
                                </small>
                            </tr>

                        </tbody>
                    </table>

                    <div className="col-md-2">
                    </div>

                </div>
                
            </div>
            </div>
        );
    }
}
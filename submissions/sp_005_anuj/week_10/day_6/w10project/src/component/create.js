import React from 'react';
class Create extends React.Component {
        render() {
        return(
            <div>
                <input placeholder = "Enter Name"></input>
                <select>
                    <option>India</option>
                    <option>England</option>
                    <option>Pakistan</option>
                    <option>New Zealand</option>
                    <option>Australia</option>
                    <option>Zimbabwe</option>
                    <option>USA</option>
                    <option>Canada</option>
                    <option>China</option>
                    <optin>West indies</optin>
                </select>
                <input placeholder = "T20 Score"></input>
                <input placeholder = "ODI Score"></input>
                <input placeholder = "Test Score"></input>
            </div>
        );
    }   
}
export default Create;
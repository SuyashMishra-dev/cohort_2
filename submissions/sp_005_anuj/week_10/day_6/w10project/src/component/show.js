import React from 'react';
import {Link} from 'react-router-dom';
var data=localStorage.getItem("arr");
var details=JSON.parse(data);
function Show() {
    let list = details.map((item) => {
        return(
            <div className="mt-4 offset-5 text-light">
                <table style = {{border: "2px solid white"}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>country</th>
                            <th>T20</th>
                            <th>ODI</th>
                            <th>Test</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <Link to={`/details/${item.playername}`}> <td> {item.playername}</td></Link>
                            <td> {item.country}</td>
                            <td> {item.t20}</td>
                            <td> {item.odi}</td>
                            <td> {item.test}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    })
  return (
    <div >  
          {list}
    </div>
  )
  
}
export default Show;
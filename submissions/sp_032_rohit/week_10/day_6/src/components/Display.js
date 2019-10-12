
import React from 'react';
import { Link } from "react-router-dom";
class Show extends React.Component{

    render() {
        var data=JSON.parse(localStorage.getItem("ScoreDetails"));
        
        return (
            <div style={{marginTop:120}}>
                <div className="row mt-5">  
                    <div className="col-2"></div>
                    <table className="col-8 table table-hover">
                        <thead>

                            <tr>
                                <th scope="col">Player Name</th>
                                <th scope="col">Country</th>
                                <th scope="col">T20 Score</th>
                                <th scope="col">ODI Score</th>
                                <th scope="col">Test Score</th>
                            </tr>

                        </thead>
                        
                        {    
                            data.map((items,index) => {
                                return(
                                    <tbody>

                                    <tr>
                                        <td scope="row"><Link to={`Name${index}`}>{items.name}</Link></td>
                                        <td>{items.country}</td>
                                        <td>{items.T20Score}</td>
                                        <td>{items.ODIScore}</td>
                                        <td>{items.TestScore}</td>
                                    </tr>
                                    
                                </tbody>  
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        )
    }
}
export default Show;

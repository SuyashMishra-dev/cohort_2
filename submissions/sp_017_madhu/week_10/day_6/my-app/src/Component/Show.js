import React from 'react';
import { Link } from "react-router-dom";
// import Details from "./Details";
import Back from "./Back"

class Show extends React.Component{

    render() {
        var data=JSON.parse(localStorage.getItem("ScoreDetails"));
        console.log(data);

        
        return (
            <div className="mt-5">
                 
            <h1>List Of Criketer</h1>
            <div className="row mt-5">  
            <div className="col-2"></div>
            <table className="col-8 table bg-dark text-light table-hover">
            <thead>
                <tr>
                {/* <th scope="col">Sl. No.</th> */}
                <th scope="col">Player Name</th>
                <th scope="col">Country</th>
                <th scope="col">T20 Score</th>
                <th scope="col">ODI Score</th>
                <th scope="col">Test Score</th>
                </tr>
            </thead>
            {    
                data.map((items, index) => {
                    return(
                        <tbody>
                        <tr>
                         
                          <td scope="row"><Link to={`Name${index}`}>{items.Name}</Link></td>
                          <td>{items.Country}</td>
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
            <Back />
            </div>
         )
    }
}
export default Show;


  // <div>
               
            //   {
            //     data.map((items,index) => {
            //           return (
            //                 <div>
                                 
            //                     <div class="card text-white bg-secondary m-5">
            //                    <div class="card-header bg-dark text-light"><h3><Link to={`Name${index}`}>Player Name :- {items.Name}</Link></h3></div>
            //                         <div class="card-body">
            //                         <h5 class="card-title ">Country :- {items.Country}</h5>
            //                         <h5 class="card-title ">T20 Score :- {items.T20Score}</h5>
            //                         <h5 class="card-title">ODI Score :- {items.ODIScore}</h5>
            //                         <h5 class="card-title">Test Score:-{items.TestScore}</h5>
            //                         </div>
            //                     </div>
            //                     </div>
            //                 );
                         
            //       })
            //   }
            
               
            //  </div>
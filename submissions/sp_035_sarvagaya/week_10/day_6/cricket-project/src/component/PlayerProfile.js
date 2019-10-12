import React from "react";

class PlayerProfile extends React.Component
{
    render()
    {
        var data = JSON.parse(localStorage.getItem("playerDetails"));
        console.log(data);
        
        return(
            <div>
                <div className="d-flex">
                {
                    data.map((list) =>{
                        return(
                            <div className="card bg-primary text-center" style={{width: 250}}>
                                <div className="card-body">
                                    <p className="bg-light">Player Name: {list.name}</p>
                                    <hr></hr>
                                    <p className="bg-light">Citizen Of: {list.country}</p>
                                    <hr></hr>
                                    <p className="bg-light">T20 Score: {list.t20Score}</p>
                                    <hr></hr>
                                    <p className="bg-light">ODI Score: {list.odiScore}</p>
                                    <hr></hr>
                                    <p className="bg-light">Test Score: {list.testScore}</p>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a class="page-link" href="#">1</a></li>
                        <li className="page-item"><a class="page-link" href="#">2</a></li>
                        <li className="page-item"><a class="page-link" href="#">3</a></li>
                        <li className="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default PlayerProfile;
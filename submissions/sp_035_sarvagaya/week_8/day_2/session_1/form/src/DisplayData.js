import React from "react";
// import InputData from "./InputData";


class DisplayData extends React.Component
{
    render()
    {
        var data = JSON.parse(localStorage.getItem("Details"));
        console.log(data);
        
        return(
            <div>
                {
                    data.map((list) =>{
                        return(
                            <div className="card bg-primary" style={{width: "25%", float: "right"}}>
                                <div className="card-body">
                                    <h3>Details of {list.name}</h3>
                                    <p className="bg-dark text-light">Student Name: {list.name}</p>
                                    <p className="bg-dark text-light">Age: {list.age}</p>
                                    <p className="bg-dark text-light">Date Of Birth: {list.dob}</p>
                                    <p className="bg-dark text-light">Semester: {list.sem}</p>
                                    <p className="bg-dark text-light">Branch: {list.branch}</p>
                                    <p className="bg-dark text-light">Grade: {list.grade}</p>
                                    <p className="bg-dark text-light">Badge No.: {list.badge}</p>
                                </div>
                            </div>
                        )
                    }) 
                }
            </div>
        )
    }
}

export default DisplayData;
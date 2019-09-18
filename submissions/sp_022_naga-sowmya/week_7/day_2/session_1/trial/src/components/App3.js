import React from 'react'

class Figure extends React.Component {
    constructor(data_object){
        super(data_object);

        this.state = {
            name : "Mark Zuckerburg",
            location : "New York",
            description : "User interface designer and fornt-end developer",
            skills : ["UI/UX", "Front End Developer", "HTML", "CSS", "Javascript", "React", "Node"],
            button : ["Message", "Following"]
        }
    }
    render(){
        return (
            <div className="mt-3 card bg-secondary" style={{width: '30rem'}}>

                <div className = "row">
                    <button type="button" className="btn btn-warning col-3" style={{height: '50px'}}>PRO</button>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0rRbDhZ0Ee-y6sBgcQV_D0OJ_l2hr5aze5ChFmfLzV1vCNqx0" className="card-img-top col-9 rounded-circle" alt="mark" />
                </div>

                <div className="card-body">
                    <h5 className="card-title text-center font-weight-bold">{this.state.name}</h5>
                    <h6 className="text-center">{this.state.location}</h6>
                    <p className="card-text text-center">{this.state.description}</p>
                    <div className="d-flex align-content-lg-center">
                        <a href="#" className="btn btn-primary text-center mr-3 container">{this.state.button[0]}</a>
                        <a href="#" className="btn border border-primary text-center container">{this.state.button[1]}</a>
                    </div>
                </div>

                <div className="card-footer">
                    <p> SKILLS </p>
                    <div className = "row">
                        <p className="border border-primary col-4 mr-1">{this.state.skills[0]}</p>
                        <p className="border border-primary col-4 mr-1">{this.state.skills[1]}</p>
                        <p className="border border-primary col-3 mr-1">{this.state.skills[2]}</p>
                    </div>
                </div>

                <div className = "row card-footer">
                    <p className="border border-primary col-2 mr-1">{this.state.skills[3]}</p>
                    <p className="border border-primary col-3 mr-1">{this.state.skills[4]}</p>
                    <p className="border border-primary col-3 mr-1">{this.state.skills[5]}</p>
                    <p className="border border-primary col-3 mr-1">{this.state.skills[6]}</p>
                </div>

            </div>

        );
    }
}

export default Figure;
import React from 'react';

class SimpleList3 extends React.Component{
    render(){
        return (
            <div className="card bg-secondary" style={{width: '18rem'}}>

                <div className = "row">
                    <button type="button" className="btn btn-warning col-3" style={{height: '50px'}}>PRO</button>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0rRbDhZ0Ee-y6sBgcQV_D0OJ_l2hr5aze5ChFmfLzV1vCNqx0" className="card-img-top col-9 rounded-circle" alt="mark" />
                </div>

                <div className="card-body">
                    <h5 className="card-title text-center font-weight-bold">Mark Zuckerburg</h5>
                    <h6 className="text-center">NEW YORK</h6>
                    <p className="card-text text-center">User interface designer and front-end developer</p>
                    <div className="d-flex align-content-lg-center">
                        <a href="#" className="btn btn-primary text-center mr-3">Message</a>
                        <a href="#" className="btn border border-primary text-center">Following</a>
                    </div>
                </div>

                <div className="card-footer">
                    <p> SKILLS </p>
                    <div className = "row">
                        <p className="border border-secondary col-4">UI/UX</p>
                        <p className="border border-secondary col-4">Front-end developer</p>
                        <p className="border border-secondary col-4">HTML</p>
                    </div>
                </div>

                <div className = "row">
                    <p className="border border-secondary col-3">CSS</p>
                    <p className="border border-secondary col-3">Javascript</p>
                    <p className="border border-secondary col-3">React</p>
                    <p className="border border-secondary col-3">Node</p>
                </div>

            </div>
        );
    }
}

export default SimpleList3;
import React from 'react';
import { connect } from 'react-redux';

var count = 0;
var place = "";

function filterPlace(e) {
    place = e.target.value;
    console.log(place)
    
}

function showFacts(obj) {
    console.log(obj);
}

function Show(props) {
    // console.log(props.list.map(el => el.name))
    return (
        <div>
            <img src="https://us.123rf.com/450wm/vicasso/vicasso1801/vicasso180100088/93713397-stock-vector-illustration-of-wicket-and-ball-cricket-championship-sports.jpg?ver=6" alt="Show Background" height="670" width="100%" />
            <div className="d-flex text-light justify-content" style={{marginTop: "-670px", marginLeft: "1100px"}}>
                <h6>Filter By Country</h6>
                <select onClick = {event => filterPlace(event)}>
                    <option>England</option>
                    <option>India</option>
                    <option>New Zealand</option>
                    <option>Australia</option>
                    <option>South Africa</option>
                    <option>Pakistan</option>
                    <option>Bangladesh</option>
                    <option>Sri Lanka</option>
                    <option>West Indies</option>
                    <option>Afghanistan</option>
                </select>
            </div>
            <div className="d-flex" style={{color: "green"}}>
                {props.list.map(el => {
                    return <div className="card justify-content" onClick={() => showFacts(el)} key={count++} style={{width: "18rem"}}>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Player Name: {el.name}</li>
                                    <li className="list-group-item">Country: {el.country}</li>
                                    <li className="list-group-item">T20 Score: {el.t20Score}</li>
                                    <li className="list-group-item">ODI Score: {el.odiScore}</li>
                                    <li className="list-group-item">Test Score: {el.testScore}</li>
                                    <li className="list-group-item">Total Score: {Number(el.t20Score)+Number(el.odiScore)+Number(el.testScore)}</li>
                                </ul>
                            </div>
                })}
            </div>
            {/* <nav aria-label="Players Detail Page" style={{margin: "10% 10px 10px 1100px"}}>
                <ul className="pagination">
                <li className="page-item disabled">
                    <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                </li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item" aria-current="page">
                    <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                </li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
                </ul>
            </nav> */}
        </div>
    );
}


const mapStateToProps = state => {
    // console.log(state)
    return {
        list: state.playersList
    }
}


export default connect(
    mapStateToProps
)(Show);
import React from "react";
import { Route,Link} from "react-router-dom";
import Create from "./Create";
import Crossed from "./Crossed"


export default class Issue extends React.Component {
    render() {
        return (
          <div className=" ml-5 text-center">
          <div className="mt-5 mb-5 ">

          <div class="card border-danger bg-light mb-3">
          <h5 class=" card-header card-title"> Incident His</h5>
            <div class="card-body">
              <p class="card-text"><Link to="/Crossed">Incident's History With Resolution Deadline.</Link></p>
            </div>
            </div>


            <div className="mt-5 mb-5">
          <div class="card border-success bg-light mb-3">
          <h5 class=" card-header card-title">Create Incident</h5>
            <div class="card-body">
              <p class="card-text"><Link to="/ProductListRedux">Create New incidents here.</Link></p>
            </div>
            </div>

            <div className="mt-5 mb-5">
          <div class="card border-warning bg-light mb-3">
          <h5 class=" card-header card-title">Updated Incident</h5>
            <div class="card-body">
              <p class="card-text">Click here to update the incident.</p>
            </div>
            </div>
       </div></div>
    
     
        <table class="table border-top">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Sl.no.</th>
              <th scope="col">Incidrent ID</th>
              <th scope="col">Issue Type</th>
              <th scope="col">Incident Raised Date</th>
              <th scope="col">Resolution Date</th>

            </tr>
          </thead>
          <tbody>
          <tr>
            <th colSpan="5"><h3>Breached Incident</h3></th>
          </tr>

            <tr className="text-danger"> 
              <th scope="row">1</th>
              <td>IN735785752852878</td>
              <td>Order Related</td>
              <td>10-09-2019</td>
              <td>14-09-2019</td>
            </tr>
            <tr className="text-danger"> 
              <th scope="row">2</th>
              <td>IN735785752852878</td>
              <td>Order Related</td>
              <td>10-09-2019</td>
              <td>14-09-2019</td>
            </tr>
            <tr className="text-danger"> 
              <th scope="row">3</th>
              <td>IN735785752852878</td>
              <td>Order Related</td>
              <td>10-09-2019</td>
              <td>14-09-2019</td>
            </tr>
          </tbody>
          
        </table>


        <table class="table border-top">
          <tbody>
            
          <tr>
            <th colSpan="5"><h3>About to Breach Incident</h3></th>
          </tr>

            <tr className="text-warning"> 
              <th scope="row">1</th>
              <td>IN735785752852878</td>
              <td>Order Related</td>
              <td>25-09-2019</td>
              <td>29-09-2019</td>
            </tr>
            <tr className="text-warning"> 
              <th scope="row">2</th>
              <td>IN735785752852878</td>
              <td>Order Related</td>
              <td>25-09-2019</td>
              <td>29-09-2019</td>
            </tr>
            <tr className="text-warning"> 
              <th scope="row">3</th>
              <td>IN735785752852878</td>
              <td>Order Related</td>
              <td>25-09-2019</td>
              <td>29-09-2019</td>
            </tr>
          </tbody>
          
        </table>

        <table class="table border-top">
          <tbody>
            
          <tr>
            <th colSpan="5"><h3>Current Incident</h3></th>
          </tr>

            <tr className="text-success"> 
              <th scope="row">1</th>
              <td>IN735785752852878</td>
              <td>Order Related</td>
              <td>28-09-2019</td>
              <td>02-10-2019</td>
            </tr>
            <tr className="text-success"> 
              <th scope="row">2</th>
              <td>IN735785752852878</td>
              <td>Order Related</td>
              <td>28-09-2019</td>
              <td>02-10-2019</td>
            </tr>
            <tr className="text-success"> 
              <th scope="row">3</th>
              <td>IN735785752852878</td>
              <td>Order Related</td>
              <td>28-09-2019</td>
              <td>02-10-2019</td>
            </tr>
          </tbody>
          
        </table>
        </div>
        </div>
        )
    }
  }
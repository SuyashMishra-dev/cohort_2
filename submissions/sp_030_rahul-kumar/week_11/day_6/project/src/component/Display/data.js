import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import React from 'react'
import {connect} from 'react-redux'



const Display = (props) =>{
    console.log(props.rahul)
    var val = props.show.map(a=>{
        return (
            <tr>
                <th scope="row">*</th>
                <td>{a.Capital}</td>
                <td>{a.Continent}</td>
                <td>{a.GDP}</td>
                <td>{a.Population}</td>
            </tr>
        )
     })
         return (
                 <div className="row">
                    <table class="table table-danger">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Capital</th>
                        <th scope="col">Continent</th>
                        <th scope="col">GDP</th>
                        <th scope="col">Population</th>
                      </tr>
                    </thead>
                    <tbody> 
                    {val}   
                    </tbody>
                  </table>
                  </div>
        
    
   
                               

    )
}
const mapStateToProps = (state) =>{
    return{
        show:state.user,
        rahul:state.name
    }
}
export default connect(mapStateToProps) (Display);
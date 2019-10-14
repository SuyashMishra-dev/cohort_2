import React from 'react';
import pic from './resources/pic.jpg';
import pic1 from './resources/pic1.jpg';
import {Link,Route} from 'react-router-dom'


var arr=[];
var temp=JSON.parse(localStorage.getItem("ScoreDetails"));
if(temp === null){

}
else{
    arr= [...temp]
}
// localStorage.clear()

export default class Home extends React.Component {
constructor(){
    super()
    this.state = {
        id:0,
        name:'',
        ODIScore:'',
        T20Score:'',
        TestScore:'',
        country:'',
    }
}

handleChange =(e)=>{
    e.preventDefault()
    this.setState({
     [e.target.name]:e.target.value
    })
    
}

handleSubmit =(e)=>{
     e.preventDefault()
     let obj = {
         id:this.state.id++,
         Name:this.state.name,
         ODIScore:this.state.ODIScore,
         T20Score:this.state.T20Score,
         TestScore:this.state.TestScore,
         country:this.state.country,
     }
    arr.push(obj);
          localStorage.setItem("ScoreDetails",JSON.stringify(arr));
 
}

    render() {
        return (
            <div className="card text-white">
                <img src={pic1} className="card-img" alt="..."/>
                <div class="card-img-overlay">
                    <div className="row m-5">          
                        <div className="col-md-4">
                        </div>
                        
                        <div className="" style={{marginTop:400,marginLeft:50}}>
                        <button type="button" className="btn btn-danger ml-5 shadow p-3 mb-5 rounded" data-toggle="modal" data-target=".bd-example-modal-xl">
                            Create a Player
                        </button>
                
                        <div className="text-dark modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-xl">
                                <div className="modal-content">

                                    <form className="m-5" onSubmit={this.handleSubmit}>
                                        <img className="ml-5 mb-5" src="https://static.lladro.com/media/catalog/product/cache/9a0e182083c7c5b80c6d12079a53d350/6/1/61b9086bbb4ac8087f53cc3a8479b0ed1dedbe0794b19aa50af4d4e86d09454a081afbd4590513fb3f8f72e40d56176f8cc2abd35e113a019f8ce42b1cc6ed11.jpg" width="300px"/>
                                        <h1 className="text-dark text-center">Add a Player</h1>

                                        <div className="form-group">
                                            <label for="title">Player Name</label>
                                            <input value={this.state.name} type="text" name="name" onChange={this.handleChange} className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Player Name"/>
                                        </div>

                                        <div className="form-group">
                                            <label for="issue">T20 Score</label>
                                            <input value={this.state.T20Score} type="text" name="T20Score" onChange={this.handleChange} className="form-control" placeholder="Enter T20 Score"/>
                                            </div>

                                        <div className="form-group">
                                            <label for="ODI">ODI Score</label>
                                            <input value={this.state.ODIScore} type="text" name="ODIScore" onChange={this.handleChange} aria-describedby="emailHelp" className="form-control" placeholder="Enter ODI Score"/>
                                        </div>

                                        <div className="form-group">
                                            <label for="Test">Test Score</label>
                                            <input value={this.state.TestScore} type="text" name="TestScore" onChange={this.handleChange} aria-describedby="emailHelp" className="form-control" placeholder="Enter Test Score"/>
                                        </div>

                                        <div className="form-group">
                                            <label for="country">Select Country</label>
                                            <select className="custom-select" value={this.state.country} name="country" onChange={this.handleChange}>
                                                <option>-Country-</option>
                                                <option value="India">India</option>
                                                <option value="South Africa">South Africa</option>
                                                <option value="Sri Lanka">Sri Lanka</option>
                                                <option value="Pakistan">Pakistan </option>
                                                <option value="Australia">Australia</option>
                                                <option value="New Zealand">New Zealand</option>
                                                <option value="Bangladesh ">Bangladesh </option>
                                                <option value="West Indies">West Indies</option>
                                                <option value="Afganistan">Afganistan</option>
                                                <option value="England">England</option>
                                            </select>
                                        </div>

                                        <input value="Submit" type="submit" className="btn btn-primary"/>

                                    </form>
                                </div>
                            </div>
                        </div>
                        
                        <Link to= "/Show" >
                            <button type="button" className="btn btn-danger ml-5 shadow p-3 mb-5 rounded">
                            Show all Players
                            </button>
                        </Link>
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


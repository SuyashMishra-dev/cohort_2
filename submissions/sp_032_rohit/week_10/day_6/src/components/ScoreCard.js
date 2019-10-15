import React from 'react'
import Display from './Display'

class Student extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            T20Score: "",
            ODIScore: "",
            TestScore: "",
            country: "",
            saved: [],
            flag:false
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            saved: [...this.state.saved, this.state],
            flag:true
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {


        return (
            <div>
                <div className="row m-5">          
                    <div className="col-md-5">
                    </div>
                    <button type="button" className="btn btn-success" data-toggle="modal" data-target=".bd-example-modal-xl">
                        Create a Player
                    </button>
            
                    <div className="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">

                                <form className="m-5" onSubmit={this.handleSubmit}>
                                    <img className="ml-5 mb-5" src="https://static.lladro.com/media/catalog/product/cache/9a0e182083c7c5b80c6d12079a53d350/6/1/61b9086bbb4ac8087f53cc3a8479b0ed1dedbe0794b19aa50af4d4e86d09454a081afbd4590513fb3f8f72e40d56176f8cc2abd35e113a019f8ce42b1cc6ed11.jpg" width="300px"/>
                                    <h1>Add a Player</h1>

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
                                        <label for="Country">Select Country</label>
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
                    {/* <div className="container-fluid row">
                        <div className="col-2 offset-2">
                            {this.state.flag ? (
                                this.state.saved.map((elem,index) => {
                                    return <Display arr={elem} index={index}/>
                                })) : (<div></div>)
                            }
                        </div>
                    </div> */}
                </div>
            </div>

        )
    }
}
export default Student;

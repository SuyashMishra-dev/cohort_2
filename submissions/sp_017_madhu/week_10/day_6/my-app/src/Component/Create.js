import React from 'react';
// import Show from './component/Show'
var dataArr=[];
var temp=JSON.parse(localStorage.getItem("ScoreDetails"));
if(temp === null){

}
else{
    dataArr= [...temp]
}
// localStorage.clear();
class Create extends React.Component  {
constructor(){
    super()
    this.state = {
      Name:'',
    ODIScore:'',
    T20Score:'',
    TestScore:'',
    Country:'',
    id:0,
   
    }
}

handleChange =(e)=>{
    e.preventDefault()
    this.setState({
     [e.target.name]:e.target.value
    })
     console.log(this.state)
    
}

handleSubmit =(e)=>{
    //  alert(`${this.state.Name}`)
    alert("Data Entered");
    let obj = {
      Name: this.state.Name,
      Country: this.state.Country,
      ODIScore: this.state.ODIScore,
      TestScore:this.state.TestScore,
      T20Score:this.state.T20Score,
      id:this.state.id++,
    }
     e.preventDefault()
    dataArr.push(obj);
         console.log(dataArr);
          localStorage.setItem("ScoreDetails" ,JSON.stringify( dataArr));
 
}

render(){
    return(

        <div className="text-left bg-">
          <h1 className=" text-center offset-1 text-dark font-weight-bold mb-5 mt-5" >Enter your details here!!</h1>
          <form onSubmit={this.handleSubmit} className="offset-5">
          <label className="text-dark font-weight-bold"> Name:</label>
          <input type="text" className="form-control w-50 bg-secondary text-light" value={this.state.Name} name="Name" onChange={(e)=>this.handleChange(e)}/>
          <label className="text-dark font-weight-bold"> Country:</label>
          <select className="form-control w-50 bg-secondary text-light" value={this.state.Country}  name="Country" onChange = {(e)=>this.handleChange(e)}>
                <option value=""> Country </option>
                <option value=" India"> India </option>
                <option value=" Pakistan"> Pakistan </option>
                <option value=" Austrelia"> Austrelia </option>
                <option value="Srilankha"> Srilankha </option>
                <option value="South Africa"> South Africa </option>
                <option value="New Zealand"> New Zealand</option>
                <option value="Bangladesh ">Bangladesh </option>
                <option value="West Indies"> West Indies</option>
                <option value="Japan">Japan</option>
                <option value="China">China</option>
                <option value="Russia">Russia</option>
                <option value="India">India</option>
            </select>
            <label className="text-dark font-weight-bold"> ODI Score:</label>
            <input type="text" className="form-control w-50 bg-secondary text-light" value={this.state.ODIScore}  name="ODIScore"onChange={(e)=>this.handleChange(e)}/>
            <label className="text-dark font-weight-bold"> T20 Score:</label>
            <input type="text" className="form-control w-50 bg-secondary text-light" value={this.state.T20Score}  name="T20Score" onChange={(e)=>this.handleChange(e)}/>
            <label className="text-dark font-weight-bold">Test Score:</label>
            <input type="text" className="form-control w-50 bg-secondary text-light" value={this.state.TestScore}  name="TestScore" onChange={(e)=>this.handleChange(e)} /><br></br>
            
           <button  type="submit"className="bg-info form-control w-50  text-white rounded-pill">Submit</button>
           </form>
          <div>
        </div>
        
        </div>
    )
}
}
export default Create;
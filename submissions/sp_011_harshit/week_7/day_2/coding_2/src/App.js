import React from 'react';
import logo from './logo.svg';
import './App.css';
import Restraunt from './component/RestrauntDetails.js'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
      info:[
        {
          url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3SiUWW9MKzrH07SiAAAPsEVHKTQItWahE8T0PqYeBPRXl16lsw",
          name : "URU Brew park",
          cuisine:["asian","Asian","continental"],
          cost:600,
          minprice:50,
          time:30,
          votes:550,
          reviews:600,
          rating:4.1
        },
        {
          url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3SiUWW9MKzrH07SiAAAPsEVHKTQItWahE8T0PqYeBPRXl16lsw",
          name : "Restraunt2",
          cuisine:["asian","Asian","continental"],
          cost:700,
          minprice:60,
          time:40,
          votes:580,
          reviews:670,
          rating:4.6
        },
        {
          url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3SiUWW9MKzrH07SiAAAPsEVHKTQItWahE8T0PqYeBPRXl16lsw",
          name : "Restraunt3",
          cuisine:["asian","fast food","Asian","continental"],
          cost:390,
          minprice:45,
          time:30,
          votes:570,
          reviews:630,
          rating:4.2
        },
        {
          url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3SiUWW9MKzrH07SiAAAPsEVHKTQItWahE8T0PqYeBPRXl16lsw",
          name : "Restraunt4",
          cuisine:["asian","Asian","continental","indian"],
          cost:430,
          minprice:60,
          time:80,
          votes:580,
          reviews:670,
          rating:3.1
        },
        {
          url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3SiUWW9MKzrH07SiAAAPsEVHKTQItWahE8T0PqYeBPRXl16lsw",
          name : "Restraunt5",
          cuisine:["asian","Asian","continental"],
          cost:655,
          minprice:60,
          time:40,
          votes:580,
          reviews:670,
          rating:4.8
        },
        {
          url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3SiUWW9MKzrH07SiAAAPsEVHKTQItWahE8T0PqYeBPRXl16lsw",
          name : "Restraunt6",
          cuisine:["asian","Asian","continental"],
          cost:567,
          minprice:60,
          time:40,
          votes:480,
          reviews:670,
          rating:3.5
        },
        {
          url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3SiUWW9MKzrH07SiAAAPsEVHKTQItWahE8T0PqYeBPRXl16lsw",
          name : "Restraunt7",
          cuisine:["asian","Asian","continental"],
          cost:700,
          minprice:60,
          time:40,
          votes:540,
          reviews:670,
          rating:3.2
        },
        {
          url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3SiUWW9MKzrH07SiAAAPsEVHKTQItWahE8T0PqYeBPRXl16lsw",
          name : "Restraunt8",
          cuisine:["asian","Asian","continental"],
          cost:700,
          minprice:60,
          time:40,
          votes:580,
          reviews:670,
          rating:3.6
        },
      
        {
          url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3SiUWW9MKzrH07SiAAAPsEVHKTQItWahE8T0PqYeBPRXl16lsw",
          name : "Restraunt9",
          cuisine:["asian","Asian","continental"],
          cost:700,
          minprice:60,
          time:40,
          votes:580,
          reviews:670,
          rating:3.4
        },
        {
          url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3SiUWW9MKzrH07SiAAAPsEVHKTQItWahE8T0PqYeBPRXl16lsw",
          name : "Restraunt10",
          cuisine:["asian","Asian","continental"],
          cost:450,
          minprice:70,
          time:35,
          votes:760,
          reviews:870,
          rating:4.1
        },
      ], 
      i:0,
          
    }

  }
  setval=(arg)=>{
    this.setState({
      i:arg
      
    })
  
  }


  render() {
    console.log(this.state.i)

    let x=this.state.info.filter((v)=>v.rating<=this.state.i).map(a=> {
      return <Restraunt price={a.cost} min={a.minprice} rate={a.rating} vote={a.votes} review={a.reviews} time={a.time} link={a.url} headred={a.name} type={a.cuisine}/>
    })
    return (
      <div className="App">
          <h3>Click on Sort buttons to display accordingly</h3>
          <div className="row">
                <button className="btn btn-primary " onClick={()=>this.setval(5)}>Sort4</button>
                <button className="btn btn-primary offset-1" onClick={()=>this.setval(4)}>Sort3</button>
                <button className="btn btn-primary offset-1" onClick={()=>this.setval(3)}>Sort2</button>
                <button className="btn btn-primary offset-1" onClick={()=>this.setval(2)}>Sort1</button>
          </div>
          <div className="mt-4">
          {x}
          </div>
 
         {/* <Sort value={this.display.array_detail}/> */}
      </div>
    );
  }
}
export default App;

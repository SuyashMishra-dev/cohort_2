import React from 'react';
import './App.css';
import Restaurant from './component/Restaurant'
// import Sort from './component/Sort.js'
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
      content:
      [
        {
          url : "https://via.placeholder.com/150",
          name : "URU BrewPark",
          cuisine:["North Indian","Asian","continental"],
          cost:600,
          minprice:50,
          time:30,
          votes:550,
          reviews:600,
          rating:4.1
        },
        {
          url : "https://via.placeholder.com/150",
          name : "Restaurant 2",
          cuisine:["North Indian","Asian","continental"],
          cost:700,
          minprice:60,
          time:40,
          votes:580,
          reviews:670,
          rating:1.6
        },
        {
          url : "https://via.placeholder.com/150",
          name : "Restaurant 3",
          cuisine:["North Indian","fast food","Asian","continental"],
          cost:390,
          minprice:45,
          time:30,
          votes:570,
          reviews:630,
          rating:2.2
        },
        {
          url : "https://via.placeholder.com/150",
          name : "Restaurant 4",
          cuisine:["North Indian","Asian","continental","South Indian"],
          cost:430,
          minprice:60,
          time:80,
          votes:580,
          reviews:670,
          rating:3.1
        },
        {
          url : "https://via.placeholder.com/150",
          name : "Restaurant 5",
          cuisine:["North Indian","Asian","continental"],
          cost:655,
          minprice:60,
          time:40,
          votes:580,
          reviews:670,
          rating:4.8
        },
        {
          url : "https://via.placeholder.com/150",
          name : "Restaurant 6",
          cuisine:["North Indian","Asian","continental"],
          cost:567,
          minprice:60,
          time:40,
          votes:480,
          reviews:670,
          rating:3.5
        },
        {
          url : "https://via.placeholder.com/150",
          name : "Restaurant 7",
          cuisine:["North Indian","Asian","continental"],
          cost:700,
          minprice:60,
          time:40,
          votes:540,
          reviews:670,
          rating:1.5
        },
        {
          url : "https://via.placeholder.com/150",
          name : "Restaurant 8",
          cuisine:["North Indian","Asian","continental"],
          cost:700,
          minprice:60,
          time:40,
          votes:580,
          reviews:670,
          rating:2.6
        },
      
        {
          url : "https://via.placeholder.com/150",
          name : "Restaurant 9",
          cuisine:["North Indian","Asian","continental"],
          cost:700,
          minprice:60,
          time:40,
          votes:580,
          reviews:670,
          rating:3.4
        },
        {
          url : "https://via.placeholder.com/150",
          name : "Restaurant 10",
          cuisine:["North Indian","Asian","continental"],
          cost:450,
          minprice:70,
          time:35,
          votes:760,
          reviews:870,
          rating:4.1
        }
      ],  
      rating:0   
    }
  }
  handleChange = (n) => {
    this.setState((state) => {
      return state.rating = n;
    });
  }
  render() {
    let a=this.state.content.filter(a => a.rating > this.state.rating).map(a=> {
      return <Restaurant
      key = {a.name}
      price={a.cost}
      min={a.minprice}
      rate={a.rating}
      vote={a.votes}
      review={a.reviews}
      time={a.time}
      link={a.url}
      head={a.name}
      type={a.cuisine.join(", ")}/>
    })
    return (
      <div className="container-fluid">
        <div className="row mt-5">
          
          <div className="col-md-3"></div>
          <label className="m-2">Sort</label>
              <button type="button" className="btn btn-success mx-5" onClick={() => this.handleChange(1)}> 1 star</button>
              <button type="button" className="btn btn-success mx-5" onClick={() => this.handleChange(2)}>2+ stars  </button>
              <button type="button" className="btn btn-success mx-5" onClick={() => this.handleChange(3)}>3+ stars</button>
              <button type="button" className="btn btn-success mx-5" onClick={() => this.handleChange(4)}>4+ stars</button>
              <button type="button" className="btn btn-success mx-5" onClick={() => this.handleChange(0)}>Clear</button>

              {/* <Sort value="1+ Stars" onClick={() => this.handleChange(1)}/>
              <Sort value="2+ Stars" onClick={() => this.handleChange(2)}/>
              <Sort value="3+ Stars" onClick={() => this.handleChange(3)}/>
              <Sort value="4+ Stars" onClick={() => this.handleChange(4)}/>
              <Sort value="Clear" onClick={() => this.handleChange(0)}/> */}
          </div>
          {a}
      </div>
    );
  }
}
export default App;

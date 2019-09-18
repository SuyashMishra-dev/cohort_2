import React from 'react';
import './App.css';
import Restaurant from './components/restaurantDetails';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      restaurants: [
        {
          id:"1",
          name:"xyz",
          cost:"$600",
          min:"$50",
          ratings:4.5,
          votes:766,
          cardPayments: true
        },
        {
          id:"2",
          name:"xyz2",
          cost:"$602",
          min:"$50",
          ratings:3.5,
          votes:766,
          cardPayments: true
        },
        {
          id:"3",
          name:"xyz3",
          cost:"$600",
          min:"$30",
          ratings:2.5,
          votes:76,
          cardPayments: false        },
        {
          id:"4",
          name:"xyz4",
          cost:"$600",
          min:"$50",
          ratings:3.3,
          votes:766,
          cardPayments: true
        },
        {
          id:"5",
          name:"xyz5",
          cost:"$60",
          min:"$5",
          ratings:1.5,
          votes:766,
          cardPayments: true
        },
      ],      
      threshold:0
    }
  }

  setThreshold = (val) => {
    this.setState({threshold:val});
  }

  // filterRestaurants = (star) => {
  //   let filteredArr = this.state.restaurants;
  //   filteredArr = filteredArr.filter(res=>res.ratings>star);
  //   console.log(filteredArr)
  //   this.setState((prevState)=>({
  //     flag : !prevState.flag
  //   }))
  //   console.log(this.state)
  //   return filteredArr;
  // }

  render(){
    // let restaurants = this.state.restaurants;
    
    return (
      <div className="container p-3">
        <h1 className="text-center mb-3">Restaurant</h1>
        <div className="row">
          <button onClick={()=>{this.setThreshold(4)}} className="btn btn-success mr-2">4 Star</button>
          <button onClick={()=>{this.setThreshold(3)}} className="btn btn-success mr-2">3 Star</button>
          <button onClick={()=>{this.setThreshold(2)}} className="btn btn-success mr-2">2 Star</button>
          <button onClick={()=>{this.setThreshold(1)}} className="btn btn-success">1 Star</button>
        </div>

        {this.state.restaurants.filter(res=>res.ratings>this.state.threshold).map(restaurant=>{
          return (<Restaurant key={restaurant.id} data={restaurant} />)
        })}
        
      </div>
      
    );
  }
}


export default App;

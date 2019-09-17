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
      filterRestaurants : [
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
    }
  }

  filterRestaurants = (star) => {
    // let filteredArr = this.state.restaurants;
    // filteredArr = filteredArr;
    this.setState(prevState=>({
      filterRestaurants : prevState.restaurants.filter(res=>res.ratings>star)
    }))
    
    
  }

  render(){
    let restaurants = this.state.filterRestaurants;

    return (
      <div className="container p-3">
        <h1 className="text-center mb-3">Restaurant</h1>
        <div className="row">
          <button onClick={()=>{this.filterRestaurants(4)}} className="btn btn-success mr-2">4 Star</button>
          <button onClick={()=>{this.filterRestaurants(3)}} className="btn btn-success mr-2">3 Star</button>
          <button onClick={()=>{this.filterRestaurants(2)}} className="btn btn-success mr-2">2 Star</button>
          <button onClick={()=>{this.filterRestaurants(1)}} className="btn btn-success">1 Star</button>
        </div>

        {restaurants.map(restaurant=>{
          return (<Restaurant key={restaurant.id} data={restaurant} />)
        })}
        
      </div>
      
    );
  }
}


export default App;

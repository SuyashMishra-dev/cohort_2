import React from 'react';
import logo from './logo.svg';
import './App.css';
import RestaurantDetails from './components/RestaurantDetails'
import Buttons from './components/Buttons';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   name: ['URU BREWPARK', 'URU BREWPARK','URU BREWPARK','URU BREWPARK','URU BREWPARK','URU BREWPARK','URU BREWPARK','URU BREWPARK','URU BREWPARK','URU BREWPARK'],
    //   categories: 'Continental, Pizza, Asian, Desserts',
    //   cost: [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100],
    //   payments: ['Online', 'Offline', 'Online', 'Offline', 'Online', 'Offline', 'Online', 'Offline', 'Online', 'Offline'],
    //   votes: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    //   reviews: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    //   rating: [5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5],
    //   filterRange: [4, 3, 2, 1]
    // }
    this.state = {
      restaurants :  [
        {name: "URU BREWPARK", categories: "Continental, Pizza, Asian, Desserts", cost: 1000, payments: 'Online', votes: 10, reviews: 100, rating: 5},
        {name: "URU BREWPARK", categories: "Continental, Pizza, Asian, Desserts", cost: 900, payments: 'Online', votes: 20, reviews: 200, rating: 4.5},
        {name: "URU BREWPARK", categories: "Continental, Pizza, Asian, Desserts", cost: 800, payments: 'Online', votes: 30, reviews: 300, rating: 3},
        {name: "URU BREWPARK", categories: "Continental, Pizza, Asian, Desserts", cost: 700, payments: 'Online', votes: 40, reviews: 400, rating: 3.5},
        {name: "URU BREWPARK", categories: "Continental, Pizza, Asian, Desserts", cost: 600, payments: 'Online', votes: 50, reviews: 500, rating: 2},
        {name: "URU BREWPARK", categories: "Continental, Pizza, Asian, Desserts", cost: 500, payments: 'Online', votes: 60, reviews: 600, rating: 2.5},
        {name: "URU BREWPARK", categories: "Continental, Pizza, Asian, Desserts", cost: 400, payments: 'Online', votes: 70, reviews: 700, rating: 2},
        {name: "URU BREWPARK", categories: "Continental, Pizza, Asian, Desserts", cost: 300, payments: 'Online', votes: 80, reviews: 800, rating: 1.5},
        {name: "URU BREWPARK", categories: "Continental, Pizza, Asian, Desserts", cost: 200, payments: 'Online', votes: 90, reviews: 900, rating: 1},
        {name: "URU BREWPARK", categories: "Continental, Pizza, Asian, Desserts", cost: 100, payments: 'Online', votes: 100, reviews: 100, rating: 0.5}
      ]
    }
    this.filter = [4, 3, 2, 1];
  }

filter(range) {
  console.log(range);
}

render() {
  return(
    <div>
      <Buttons filterItems={this.filter}/>
      <RestaurantDetails details={this.state.restaurants}/>
    </div>
  )
}
}

export default App;

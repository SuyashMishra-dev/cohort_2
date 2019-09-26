import React from 'react';
import logo from './logo.svg';
import './App.css';
import RestaurantDetails from './components/RestaurantDetails'

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
      ],
      currentFilter: 0
    }
  }

filter(range) {
  let temp = range;
  this.setState({currentFilter: temp});
}

render() {
  let rest = this.state.restaurants.filter(el => Number(el.rating) > Number(this.state.currentFilter))
  return(
    <div>
      <button className = "btn btn-success mr-2" onClick = {() => {this.filter(4)}}>4</button>
      <button className = "btn btn-success mr-2" onClick = {() => {this.filter(3)}}>3</button>
      <button className = "btn btn-success mr-2" onClick = {() => {this.filter(2)}}>2</button>
      <button className = "btn btn-success mr-2" onClick = {() => {this.filter(1)}}>1</button>
      <button className = "btn btn-success mr-2" onClick = {() => {this.filter(0)}}>Clear</button>
      <RestaurantDetails details={rest} />
    </div>
  )
}
}

export default App;

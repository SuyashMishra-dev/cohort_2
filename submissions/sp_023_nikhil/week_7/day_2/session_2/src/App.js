import React from 'react';
import './App.css';
import RestaurantDetails from './components/RestautantDetails/RestautantDetails'

class App extends React.Component{
  constructor(){
    super()
    this.state= {
      restaurant:[
        {
          name:"Meghana",
          cost: 400,
          totalVotes: 857,
          rating: 4.4
        }
        {
          name:"Sri Sai Krishna",
          cost: 200,
          totalVotes: 504,
          rating: 4.1
        }
        {
          name:"Behroze",
          cost: 700,
          totalVotes: 983,
          rating: 3.8
        }
        {
          name:"A2A",
          cost: 200,
          totalVotes: 496,
          rating: 3.6
        }
        {
          name:"Nagarjuna",
          cost: 500,
          totalVotes: 879,
          rating: 4.6
        }
        {
          name:"Mojo pizza",
          cost: 400,
          totalVotes: 983,
          rating: 2.3
        }
        {
          name:"Restaurant",
          cost: 999,
          totalVotes:99,
          rating: 1.5
        }
        {
          name:"McDonalds",
          cost: 300,
          totalVotes:1756,
          rating: 2.7
        }
        {
          name:"Pout",
          cost: 400,
          totalVotes: 309,
          rating: 1.8
        }
        {
          name:"Burger King",
          cost: 300,
          totalVotes: 1200,
          rating: 2.7
        }
      ],
      rating:0
    }
  }
  
  handleClick = (rating) => {
    return this.setState({rating:rating})
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => {this.handleClick(1)}}>1 Star</button>
        <button onClick={() => {this.handleClick(2)}}>2 Star</button>
        <button onClick={() => {this.handleClick(3)}}>3 Star</button>
        <button onClick={() => {this.handleClick(4)}}>4 Star</button>
        <RestaurantDetails data={this.state.restaurant.filter(elm => elm.rating > this.state.rating)   } /> 
      </React.Fragment>
    )
  }
}

export default App;

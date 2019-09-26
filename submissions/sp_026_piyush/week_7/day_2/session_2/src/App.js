import React from 'react';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        // info: {
        //   name: 'URU Brewpark',
        //   payment: 'Accepts Credit Card payment',
        //   votes: 500,
        //   reviews: 200,
        //   costForOne: 600,
        //   rating: 4.3,
        //   categories: ['Continental', 'Pizza', 'Asian', 'Desserts'],
        //   src: './img1.jpg',
        // },
        restaurants: [
          {
            name: 'Bob\'s Brewpark',
            payment: 'Accepts Credit Card payment',
            votes: 500,
            reviews: 200,
            costForOne: 600,
            rating: 0.3,
            categories: ['Continental', 'Pizza', 'Asian', 'Desserts'],
            src: './img1.jpg',
          },
          {
            name: 'Albert\'s Dim Sum',
            payment: 'Accepts Credit Card payment',
            votes: 501,
            reviews: 205,
            costForOne: 620,
            rating: 4.3,
            categories: ['Continental', 'Pizza', 'Asian', 'Desserts'],
            src: './img1.jpg',
          },
          {
            name: 'Madhu\'s Rasgulle',
            payment: 'Accepts Credit Card payment',
            votes: 501,
            reviews: 205,
            costForOne: 620,
            rating: 4.1,
            categories: ['Continental', 'Pizza', 'Asian', 'Desserts'],
            src: './img1.jpg',
          },
          {
            name: 'Arunabh\'s Maggie Spot',
            payment: 'Accepts Credit Card payment',
            votes: 501,
            reviews: 205,
            costForOne: 620,
            rating: 3.9,
            categories: ['Continental', 'Pizza', 'Asian', 'Desserts'],
            src: './img1.jpg',
          },
          {
            name: 'Sarvagaya\'s Sweets',
            payment: 'Accepts Credit Card payment',
            votes: 501,
            reviews: 205,
            costForOne: 620,
            rating: 2.3,
            categories: ['Continental', 'Pizza', 'Asian', 'Desserts'],
            src: './img1.jpg',
          },
          {
            name: 'Nikhil\'s Paneer Pulao',
            payment: 'Accepts Credit Card payment',
            votes: 501,
            reviews: 205,
            costForOne: 620,
            rating: 3.3,
            categories: ['Continental', 'Pizza', 'Asian', 'Desserts'],
            src: './img1.jpg',
          },
          {
            name: 'Sandhya\'s Cafe',
            payment: 'Accepts Credit Card payment',
            votes: 501,
            reviews: 205,
            costForOne: 620,
            rating: 3.3,
            categories: ['Continental', 'Pizza', 'Asian', 'Desserts'],
            src: './img1.jpg',
          },
          {
            name: 'Gayathri\'s Pizzas',
            payment: 'Accepts Credit Card payment',
            votes: 501,
            reviews: 205,
            costForOne: 620,
            rating: 4.3,
            categories: ['Continental', 'Pizza', 'Asian', 'Desserts'],
            src: './img1.jpg',
          },
          {
            name: 'Sachin\'s Kebabs',
            payment: 'Accepts Credit Card payment',
            votes: 501,
            reviews: 205,
            costForOne: 620,
            rating: 4.5,
            categories: ['Continental', 'Pizza', 'Asian', 'Desserts'],
            src: './img1.jpg',
          },
          {
            name: 'Soumya\'s Dhaba',
            payment: 'Accepts Credit Card payment',
            votes: 501,
            reviews: 205,
            costForOne: 620,
            rating: 0.3,
            categories: ['Continental', 'Pizza', 'Asian', 'Desserts'],
            src: './img1.jpg',
          }, 
        ],
      },
      ratingCheck: 0
    }
  }

  // handleOnclick = (number) => {
  //   this.setState((state) => {
  //     return state.data.restaurants = state.data.restaurants.filter(element => element.rating > number)
  //   });
  // }

  handleOnclick = (number) => {
      this.setState((state) => {
        return state.ratingCheck = number;
      });
    }

  render() {
    return( 
      <div>
        {/* <Card name={this.state.data.info.name} payment={this.state.data.info.payment} votes={this.state.data.info.votes} reviews={this.state.data.info.reviews} costForOne={this.state.data.info.costForOne} categories={this.state.data.info.categories} src={this.state.data.info.src} rating={this.state.data.info.rating}/> */}

        {/* {this.state.data.restaurants.map(element => {
          return <Card 
            name={element.name} 
            payment={element.payment} 
            votes={element.votes} 
            reviews={element.reviews} 
            costForOne={element.costForOne} 
            categories={element.categories} 
            src={element.src} 
            rating={element.rating} />
        })} */}

        {this.state.data.restaurants.filter(element => element.rating > this.state.ratingCheck).map(element => {
          return <Card 
            name={element.name} 
            payment={element.payment} 
            votes={element.votes} 
            reviews={element.reviews} 
            costForOne={element.costForOne} 
            categories={element.categories} 
            src={element.src} 
            rating={element.rating} />
        })}

        <button className="btn rounded bg-info ml-3 mt-2" onClick={() => this.handleOnclick(1)}>Restaurants 1+ star</button>
        <button className="btn rounded bg-info ml-2 mt-2" onClick={() => this.handleOnclick(2)}>Restaurants 2+ stars  </button>
        <button className="btn rounded bg-info ml-2 mt-2" onClick={() => this.handleOnclick(3)}>Restaurants 3+ stars</button>
        <button className="btn rounded bg-info ml-2 mt-2" onClick={() => this.handleOnclick(4)}>Restaurants 4+ stars</button>
        <button className="btn rounded bg-info ml-2 mt-2" onClick={() => this.handleOnclick(0)}>See Soumya's 0.3 stars restaurant</button>
      </div>
    );
  }
 }

export default App;

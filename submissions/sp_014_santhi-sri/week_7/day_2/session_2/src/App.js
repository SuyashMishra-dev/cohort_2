import React from 'react';
import Home from "./components/home"
import './App.css';
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      RestaurentDetails: [
        { name: "Lassi Shop", cuisine: 'icecream', price: 100, rating: 4.5, images: '/lassi0.webp' },
        { name: "Lunch box", cuisine: "south north continental", price: 200, rating: 3.4, images: '/images2.jpg' },
        { name: "Foodys", cuisine: "northIndian southIndian chinese", price: 250, rating: 2.5, images: '/image3.jpeg' },
        { name: "RASTA", cuisine: "indian chinese", price: 200, rating: 3.2, images: '/image4.jpeg' },
        { name: "Madhura shop", cuisine: 'icecream', price: 100, rating: 4.2, images: '/images5.jpeg' },
        { name: "Truffles", cuisine: "south north continental", price: 200, rating: 1.4, images: '/images6.jpeg' },
        { name: "MTR", cuisine: "northIndian southIndian hinese", price: 250, rating: 1.2, images: '/images7.jpeg' },
        { name: "Udupi Park", cuisine: "Indian chinese", price: 300, rating: 3, images: '/images8.jpeg' },
        { name: "Eat fit", cuisine: "Indian chinese", price: 500, rating: 3.5, images: '/images9.jpeg' },
        { name: "Madhura shop", cuisine: 'icecream', price: 100, rating: 4.2, images: '/images5.jpeg' }
      ],
      currentRating: 0
    }
  }
  fliterRating = (e) => {
    this.setState({ currentRating: e })
  }
  render() {

    return (
      <React.Fragment>
        <div>
          <button type="button" class="btn btn-danger btn-outline-dark m-3" onClick={() => { this.fliterRating(4) }}>4+ rating</button>
          <button type="button" class="btn btn-primary btn-outline-dark m-3" onClick={() => { this.fliterRating(3) }}>3+ rating</button>
          <button type="button" class="btn btn-secondary btn-outline-dark m-3" onClick={() => { this.fliterRating(2) }}>2+ rating</button>
          <button type="button" class="btn btn-success btn-outline-dark m-3" onClick={() => { this.fliterRating(1) }}>1+ rating</button>
          <button type="button" class="btn btn-warning btn-outline-dark m-3" onClick={() => { this.fliterRating(0) }}>clear</button>
        </div>
        <div className = "row ml-5">
          {this.state.RestaurentDetails.filter((rate) => Number(rate.rating) > Number(this.state.currentRating)).map(item => <Home details={item} />)}
        </div>
      </React.Fragment>
    )
  }
}




export default App;

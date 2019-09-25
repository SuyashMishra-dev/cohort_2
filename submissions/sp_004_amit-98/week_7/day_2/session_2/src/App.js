import React from 'react'
import './App.css';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ResturantDetails: [
        {
          name: 'Chicken do Pyaza',
          img: "https://lorempixel.com/output/food-q-c-150-150-6.jpg",
          pricing: 300,
          minimumOrder: 50,
          deliveryTime: 30,
          rating: 3.6,
          totalVotes: 564,
          totalReview: 153

        },
        {
          name: 'Chicken Tandoori',
          img: "https://lorempixel.com/output/food-q-c-150-150-7.jpg",
          pricing: 300,
          minimumOrder: 50,
          deliveryTime: 30,
          rating: 2.6,
          totalVotes: 654,
          totalReview: 123

        },
        {
          name: 'Chicken do Pyaza',
          img: "https://lorempixel.com/output/food-q-c-150-150-3.jpg",
          pricing: 300,
          minimumOrder: 50,
          deliveryTime: 30,
          rating: 4.9,
          totalVotes: 487,
          totalReview: 123

        },
        {
          name: 'Chicken Masala',
          img: "https://lorempixel.com/output/food-q-c-150-150-4.jpg",
          pricing: 300,
          minimumOrder: 50,
          deliveryTime: 30,
          rating: 3.9,
          totalVotes: 444,
          totalReview: 83

        },
        {
          name: 'Chicken Curry',
          img: "https://lorempixel.com/output/food-q-c-150-150-9.jpg",
          pricing: 300,
          minimumOrder: 50,
          deliveryTime: 30,
          rating: 2.2,
          totalVotes: 987,
          totalReview: 73

        },
        {
          name: 'Chicken Garllic',
          img: "https://lorempixel.com/output/food-q-c-150-150-2.jpg",
          pricing: 300,
          minimumOrder: 50,
          deliveryTime: 30,
          rating: 3.2,
          totalVotes: 354,
          totalReview: 93

        },
        {
          name: 'Chicken Butter Masala',
          img: "https://lorempixel.com/output/food-q-c-150-150-4.jpg",
          pricing: 300,
          minimumOrder: 50,
          deliveryTime: 30,
          rating: 1.2,
          totalVotes: 409,
          totalReview: 63

        },
        {
          name: 'Chicken Grilled',
          img: "https://lorempixel.com/output/food-q-c-150-150-2.jpg",
          pricing: 300,
          minimumOrder: 50,
          deliveryTime: 30,
          rating: 4.2,
          totalVotes: 324,
          totalReview: 33

        },
        {
          name: 'Chicken Rice',
          img: "https://lorempixel.com/output/food-q-c-150-150-8.jpg",
          pricing: 300,
          minimumOrder: 50,
          deliveryTime: 30,
          rating: 3.8,
          totalVotes: 554,
          totalReview: 13

        },
        {
          name: 'Chicken Biryani',
          img: "https://lorempixel.com/output/food-q-c-150-150-5.jpg",
          pricing: 300,
          minimumOrder: 50,
          deliveryTime: 30,
          rating: 3.2,
          totalVotes: 984,
          totalReview: 23

        },
      ], rating: 0
    }
  }
  handleClick(rating) {
    return this.setState({ rating: rating });
  }
  render() {
    return (
      <>
        <div style={{ marginLeft: "300px" }}>
          <button className="btn rounded bg-primary ml-3 mt-2" onClick={() => this.handleClick(1)}> 1+ star</button>
          <button className="btn rounded bg-secondary ml-3 mt-2" onClick={() => this.handleClick(2)}>2+ stars  </button>
          <button className="btn rounded bg-warning ml-3 mt-2" onClick={() => this.handleClick(3)}>3+ stars</button>
          <button className="btn rounded bg-danger ml-3 mt-2" onClick={() => this.handleClick(4)}>4+ stars</button>
        </div>
        {
          this.state.ResturantDetails.filter(item => item.rating > this.state.rating).map(items => {
            return (
              <div className="container-fluid" style={{ marginLeft: "200px" }}>
                <div className="row col-lg-4">
                  <div className="card m-3" style={{ width: "20rem" }}>
                    <div style={{ float: "left" }}>
                      <div><img src={items.img} className="card-img-top"></img></div>
                    </div>
                    <h3 style={{ color: "red" }}>Item: {items.name}</h3>
                    <div style={{ marginLeft: "30px" }}>Rating: {items.rating} ★</div>
                    <div style={{ marginLeft: "30px" }}>Cost ₹ {items.pricing} for one</div>
                    <div style={{ marginLeft: "30px" }}>Minimum Order: {items.minimumOrder}</div>
                    <div style={{ marginLeft: "30px" }}>Up to {items.deliveryTime} min</div>
                    <div style={{ marginLeft: "30px" }}>{items.totalVotes} Votes</div>
                    <div style={{ marginLeft: "30px" }}>{items.totalReview} Reviews</div>
                  </div>
                </div>
              </div>
            )
          })}
      </>
    )
  }
}
export default App;

import React from 'react';
import Breakfast from './components/card'
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      Breakfast : [{
        image:"https://images.pexels.com/photos/2113556/pexels-photo-2113556.jpeg",
        name:"Buff Buffet Buff ",
        address:"60, Jyothi Nivas College Road, Koramangala 5th Block, Bang",
        rating:2.6,
        votes:"3645",
        Cuisines: "North Indian, Chinese, Thai, South Indian, Continental",
        Cost : "₹1,500",
        Hours:"7am – 10am, 12noon – 3:30pm, 7pm – 11:30pm...",
        Featured:"Great Buffets, Great Breakfasts, Sunday Brunches, Bengaluru's Finest , Corporate Favorites"
      },
      {
        image:"https://images.pexels.com/photos/890515/pexels-photo-890515.jpeg",
        name:"Kota Kachori ",
        address:"635, 100 Feet Road, Koramangala 6th Block, Bangalore",
        rating:1.2,
        votes:4146,
        Cuisines: "North Indian, Mithai, Rajasthani, Desserts",
        Cost : "₹400",
        Hours:"8am – 9:30pm (Mon-Sun) ...",
        Featured:"Veggie Friendly"
      },
      {
        image:"https://images.pexels.com/photos/1926615/pexels-photo-1926615.jpeg",
        name:"Tea Villa Cafe",
        address:"183/16, 5th Main Road, 4th Block, Jayanagar, Bangalore",
        rating:1.4,
        votes:1680,
        Cuisines: "Cafe, Continental",
        Cost : "₹1,000",
        Hours:"10am – 11pm (Mon-Fri),9am – 11pm (Sat-Sun) ",
        Featured:"Food Hygiene Rated Restaurants in Bengaluru, Veggie Friendly, Great Breakfasts, Sneak Peek Bengaluru"
      },
      {
        image:"https://images.pexels.com/photos/1926615/pexels-photo-1926615.jpeg",
        name:"Koramangala Social  ",
        address:"118, Koramangala Industrial Area, Koramangala 7th Blo",
        rating:3.6,
        votes:5386,
        Cuisines: "American, North Indian, Chinese, Asian, Biryani, Beverages",
        Cost : "₹1,500",
        Hours:"9am – 12:30am (Mon-Sun) ",
        Featured:"Artisan Cocktails, Bengaluru's Finest "
      },
      {
        image:"https://images.pexels.com/photos/1926615/pexels-photo-1926615.jpeg",
        name:"Shivaji Military Hotel ",
        address:"718, 1st C Main, 45th Cross, 8th Block, Jayanagar, Bangalore",
        rating:4.6,
        votes:7635,
        Cuisines: "South Indian, Biryani",
        Cost : "₹600",
        Hours:"Closed (Mon),8:30am – 3pm, 5:30pm – 8:30pm. .",
        Featured:"Great Breakfasts, Bengaluru's Finest "
      },
      {
        image:"https://images.pexels.com/photos/1926615/pexels-photo-1926615.jpeg",
        name:"Smoke House Deli ",
        address:"1209, 100 Feet Road, Opposite Apollo Clinic, Indiranag",
        rating:4.6,
        votes:5732,
        Cuisines: "European, Italian, American, Salad",
        Cost : "₹1,600",
        Hours:"9am – 12:30am (Mon-Sun) ",
        Featured:"Bengaluru's Finest "
      },
      {
        image:"https://images.pexels.com/photos/1926615/pexels-photo-1926615.jpeg",
        name:"FreshMenu ",
        address:"Indira nagar",
        rating:2.9,
        votes:1170,
        Cuisines: "Hyderabadi, Biryani, Chinese, Fast Food",
        Cost : "₹450",
        Hours:"8am – 11:40pm (Mon-Sun) ",
        Featured:"Just Delivery"
      },
      {
        image:"https://images.pexels.com/photos/1926615/pexels-photo-1926615.jpeg",
        name:"Asha Tiffins ",
        address:"1170, 5th Main Road, Sector 7, HSR, Bangalore",
        rating:1.2,
        votes:3645,
        Cuisines: "South Indian, North Indian, Chinese",
        Cost : "₹200",
        Hours:"7am – 11:30am, 12:30pm – 3:30pm, 4:30pm – 10pm... ",
        Featured:"Great Buffets, Great Breakfasts, Sunday Brunches, Bengaluru's Finest , Corporate Favorites"
      },
      {
        image:"https://images.pexels.com/photos/1926615/pexels-photo-1926615.jpeg",
        name:"Buff Buffet Buff ",
        address:"60, Jyothi Nivas College Road, Koramangala 5th Block, Bang",
        rating:2.6,
        votes:3645,
        Cuisines: "North Indian, Chinese, Thai, South Indian, Continental",
        Cost : "₹1,500",
        Hours:"7am – 10am, 12noon – 3:30pm, 7pm – 11:30pm...",
        Featured:"Great Buffets, Great Breakfasts, Sunday Brunches, Bengaluru's Finest , Corporate Favorites"
      }
    ],
    presentFilter : 0
    }
  }

  filter(value) {
    let temp = value;
    this.setState({presentFilter :temp})
    console.log(value)
  }
  render(){
    let filtered = this.state.Breakfast.filter(e => Number(e.rating) > Number(this.state.presentFilter))
    console.log(this.state.Breakfast.presentFilter)
    return(<div>
      <h2>Sort By</h2>        
      <button className="btn btn-dark m-2 ml-8" onClick = {() => {this.filter(4)}}>Star 4</button>
        <button className="btn btn-dark m-2" onClick = {() => {this.filter(3)}}>Star 3</button>
        <button className="btn btn-dark m-2" onClick = {() => {this.filter(2)}}>Star 2</button>
        <button className="btn btn-dark m-2" onClick = {() => {this.filter(1)}}>Star 1</button>
        <Breakfast input ={filtered}/>
      </div>
    )
  }
}

export default App;


// filter(range) {
//   let temp = range;
//   this.setState({currentFilter: temp});
// }

// render() {
//   let rest = this.state.restaurants.filter(el => Number(el.rating) > Number(this.state.currentFilter))
//   return(
//     <div>
//       <button className = "btn btn-success mr-2" onClick = {() => {this.filter(4)}}>4</button>
//       <button className = "btn btn-success mr-2" onClick = {() => {this.filter(3)}}>3</button>
//       <button className = "btn btn-success mr-2" onClick = {() => {this.filter(2)}}>2</button>
//       <button className = "btn btn-success mr-2" onClick = {() => {this.filter(1)}}>1</button>
//       <button className = "btn btn-success mr-2" onClick = {() => {this.filter(0)}}>Clear</button>
//       <RestaurantDetails details={rest} />
//     </div>
//   )
// }
// }
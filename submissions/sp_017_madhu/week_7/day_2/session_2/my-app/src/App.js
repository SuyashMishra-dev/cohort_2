import React from 'react';
import './App.css';
import Resturant from './component/Resturant';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
      
        restaurants: [
          {
            name: 'The house of common',
            payment: 'Credit/Debit Card payment or COD',
            votes: 500,
            review: 300,
            cost: 200,
            rating: 3.3,
            container: ['Italian', 'Mexican', 'Chinese', 'Dessert'],
            src: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
          },
          {
            name: 'Hungry Hippie',
            payment: 'Credit/Debit Card payment or COD',
            votes: 200,
            review: 300,
            cost: 500,
            rating: 4.5,
            container: ['Italian', 'Mexican', 'Chinese', 'Dessert'],
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYg0JPKejg_T3zLALtuOZ_KidGuReEO1fyu609fOpp0QfzUehhPQ',
          },
          {
            name: 'Boho',
            payment: 'Credit/Debit Card payment or COD',
            votes: 601,
            review: 230,
            cost: 690,
            rating: 4.3,
            container: ['Italian', 'Mexican', 'Chinese', 'Dessert'],
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmtjh7q07zhgOzTYm34jqICEYNImRbkXQch3206-m54auv_4zc',
          },
          {
            name: 'Madina',
            payment: 'Credit/Debit Card payment or COD',
            votes: 200,
            review: 300,
            cost: 500,
            rating: 3.6,
            container: ['Italian', 'Mexican', 'Chinese', 'Dessert'],
            src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*',
          },
          {
            name: 'Kaveri',
            payment: 'Credit/Debit Card payment or COD',
            votes: 561,
            review: 555,
            cost: 520,
            rating: 2.6,
            container: ['Italian', 'Mexican', 'Chinese', 'Dessert'],
            src: 'https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg',
          },
          {
            name: 'Barlez',
            payment: 'Credit/Debit Card payment or COD',
            votes: 801,
            review: 695,
            cost: 320,
            rating: 3.9,
            container: ['Italian', 'Mexican', 'Chinese', 'Dessert'],
            src: 'https://s.abcnews.com/images/GMA/190912_FRIEDCHICKEN_SANDWICH_hpMain_1x1_608.jpg',
          },
          {
            name: 'New Tasty',
            payment: 'Credit/Debit Card payment or COD',
            votes: 200,
            review: 300,
            cost: 500,
            rating: 3.3,
            container: ['Italian', 'Mexican', 'Chinese', 'Dessert'],
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAqqkSNJpx_XS89PHqv3xRCFiIv-JrislAHCXgVqyyX3SF-uZ',
          },
          {
            name: 'New Restro',
            payment: 'Credit/Debit Card payment or COD',
            votes: 200,
            review: 300,
            cost: 500,
            rating: 4.3,
            container: ['Italian', 'Mexican', 'Chinese', 'Dessert'],
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzK8mblaXuCIM2l9EhqwjkI-uE7MmT3drB-7xQbgBFf4pBrrjZ',
          },
          {
            name: 'Rajdhani',
            payment: 'Credit/Debit Card payment or COD',
            votes: 200,
            review: 300,
            cost: 1000,
            rating: 3.5,
            container: ['Italian', 'Mexican', 'Chinese', 'Dessert'],
            src: 'https://media.gettyimages.com/photos/high-angle-view-of-food-in-plate-picture-id763289873?s=612x612',
          },
          {
            name: 'TBC',
            payment: 'Credit/Debit Card payment or COD',
            votes: 200,
            review: 300,
            cost: 500,
            rating: 1.5,
            container: ['Italian', 'Mexican', 'Chinese', 'Dessert'],
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqj0c62oQkGUPffFmnnfBVmCruewsbCsGLMAhqcdP3qnDJonhw',
          },
          {
            name: 'Shift',
            payment: 'Credit/Debit Card payment or COD',
            votes: 200,
            review: 300,
            cost: 500,
            rating: 4.5,
            container: ['Italian', 'Mexican', 'Chinese', 'Dessert'],
            src: 'https://static01.nyt.com/images/2019/02/06/dining/06Hungry-slideshow-slide-B06X/06Hungry-slideshow-slide-B06X-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
          },
        ],
      },rating: 0
    }
  }


  handleChange = (n) => {
      this.setState((state) => {
        return state.rating = n;
      });
    }

  render() {
    return( 
      <div className="ml-5">
        
        {this.state.data.restaurants.filter(element => element.rating > this.state.rating).map(element => {
          return <Resturant 
            name={element.name} 
            payment={element.payment} 
            votes={element.votes} 
            review={element.review} 
            cost={element.cost} 
            container={element.container} 
            src={element.src} 
            rating={element.rating} 
            />
          }
        )}

        <div className="row">
          
          <div className="col-md-1"></div>
            <div className=" col-md-10">
              <button type="button" class="btn btn-info mx-5"onClick={() => this.handleChange(1)}> 1 star</button>
              <button type="button" class="btn btn-info mx-5" onClick={() => this.handleChange(2)}>2+ stars  </button>
              <button type="button" class="btn btn-info mx-5" onClick={() => this.handleChange(3)}>3+ stars</button>
              <button type="button" class="btn btn-info mx-5" onClick={() => this.handleChange(4)}>4+ stars</button>
              <button type="button" class="btn btn-info mx-5" class="invisible" onClick={() => this.handleChange(0)}>Clear</button>
            </div>
          </div>
      </div>
    );
  }
 }



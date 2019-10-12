import React from 'react';
import SeeMore from './SeeMore';

export default class DisplayMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
      
        restaurants: [
          {
            name: 'Bardot Off Shoulder Frill Midi Dress Navy | Feverfish | SilkFred',
            payment: 'Credit/Debit Card payment or COD',
            votes: 500,
            review: 300,
            cost: 200,
            rating: 3.3,
            container: ['XS,S,M,L,XL,XXL'],
            src: 'https://bec2df9eb90bb6604cfc-660d71a7a33bc04488a7427f5fddcedf.ssl.cf3.rackcdn.com/uploads/product_image/photo/5ca5c1fcdd232e1f638599e1/medium_2019_04_03_Ella_Chynna_FeverFish15102.jpg',
          },
          {
            name: 'Hungry Hippie',
            payment: 'Credit/Debit Card payment or COD',
            votes: 200,
            review: 300,
            cost: 500,
            rating: 4.5,
            container: ['Italian', 'Mexican', 'Chinese', 'Dessert'],
            src: 'https://theclosetlover.shopcadacdn.com/sites/files/theclosetlover/productimg/201901/18_dsc05034a.jpg',
          },
          {
            name: 'Boho',
            payment: 'Credit/Debit Card payment or COD',
            votes: 601,
            review: 230,
            cost: 690,
            rating: 4.3,
            container: ['Italian', 'Mexican', 'Chinese', 'Dessert'],
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhUnztV5RJ1BvcF9jRvltYH9IUNpdWDVNlbMF8k2XImDDm3SrZQ',
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
            src: 'https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/947C27D3889F41568B72E3E8A079A627/205405026_9308_947C27D3889F41568B72E3E8A079A627.jpg',
          },
          {
            name: 'Barlez',
            payment: 'Credit/Debit Card payment or COD',
            votes: 801,
            review: 695,
            cost: 320,
            rating: 3.9,
            container: ['Italian', 'Mexican', 'Chinese', 'Dessert'],
            src: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/7269897/2018/9/4/18bb9224-ef43-4d4f-8e01-ea9e1fc02b321536055890789-NA-7591536055890597-1.jpg',
          },
          {
            name: 'New Tasty',
            payment: 'Credit/Debit Card payment or COD',
            votes: 200,
            review: 300,
            cost: 500,
            rating: 3.3,
            container: ['Italian', 'Mexican', 'Chinese', 'Dessert'],
            src: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/7269897/2018/9/4/18bb9224-ef43-4d4f-8e01-ea9e1fc02b321536055890789-NA-7591536055890597-1.jpg',
          },
          {
            name: 'New Restro',
            payment: 'Credit/Debit Card payment or COD',
            votes: 200,
            review: 300,
            cost: 500,
            rating: 4.3,
            container: ['Italian', 'Mexican', 'Chinese', 'Dessert'],
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_yyx-L8SIJEBLfyTIuLCLj8lHXnq5X_rHGMF4y5cpmr6urlv8',
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
            src: 'https://rukminim1.flixcart.com/image/332/398/jlv70y80/dress/g/r/j/xs-8134-zima-leto-original-imaf8vy4sz2cgbtr.jpeg?q=50',
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
          return( <SeeMore 
            name={element.name} 
            payment={element.payment} 
            votes={element.votes} 
            review={element.review} 
            cost={element.cost} 
            container={element.container} 
            src={element.src} 
            rating={element.rating} 
            />
          )
         
          }
        )}

       </div>
    
    );
  }
 }


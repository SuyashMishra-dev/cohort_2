import React from 'react';
import logo from './logo.svg';
import './App.css';
// import RestaurantDetails from './RestaurantDetails.js';
// import Value1 from './restaurent.js';


// const res= Value1.map(value => <RestaurantDetails key={value.id} list1={value}/>)


class App extends React.Component {
constructor(){
  super();
  this.state={
    RestaurantDetails:[

      {
        id:"card1",
         background:"white",
         margine:"30px",
         border:"2px solid blue",
         name:"URU BruPark",
         rating :"2.3",
         voters:"350 votes",
         container:"continental, Pizza, Asian,Desserts",
         cost:"cost Rs.600 for one",
         Url:"https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg"


    },

    {
        id:"card2",
        background:"gray",
        rating :"3.3",
        margine:"30px",
        border:"2px solid black",
        name:"KFC",
        voters:"350 votes",
        cost:"cost Rs.600 for one",
        container:"continental, Pizza, Asian,Desserts chicken" ,
        Url:"https://ichef.bbci.co.uk/news/660/cpsprodpb/66A2/production/_107847262_gettyimages-1152276563-594x594.jpg"


    },

    {
        id:"card3",
        background:"yellow",
        margine:"30px",
        rating :"4.6",
        border:"2px solid black",
        name:"Dominos",
        voters:"350 votes",
        cost:"cost Rs.600 for one",
        container:"continental, Pizza, Asian,Desserts",
        Url:"https://i.kinja-img.com/gawker-media/image/upload/s--ZkdkfWZf--/c_scale,f_auto,fl_progressive,q_80,w_800/lkw9iemetd2vpfggrard.jpg"


    },

    {
        id:"card3",
        background:"gray",
        margine:"30px",
        rating :"3.5",
        voters:"300 votes",
        border:"2px solid black",
        name:"Burger King",
        cost:"cost Rs.600 for one",
        container:"continental, Pizza, Asian,Desserts",
        Url:"https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg"


    },

    {
        id:"card4",
        background:"gray",
        margine:"30px",
        voters:"350 votes",
        rating :"2.5",
        border:"2px solid black",
        name:"chicken biryani",
        cost:"cost Rs.600 for one",
        container:"continental, Pizza, Asian,Desserts",
        Url:"https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg"


    },

    {
        id:"card5",
        background:"gray",
        margine:"30px",
        voters:"306 votes",
        rating :"3.5",
        border:"2px solid black",
        name:"pizza hut",
        cost:"cost Rs.600 for one",
        container:"continental, Pizza, Asian,Desserts",
        Url:"https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg"


    },

    {
        id:"card6",
        background:"gray",
        margine:"30px",
        rating :"4.6",
        voters:"300 votes",
        border:"2px solid black",
        name:"Burger King",
        cost:"cost Rs.600 for one",
        container:"continental, Pizza, Asian,Desserts",
        Url:"https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg"


    },

    {
        id:"card7",
        background:"gray",
        margine:"30px",
        rating :"2.5",
        voters:"300 votes",
        border:"2px solid black",
        name:"Burger King",
        cost:"cost Rs.600 for one",
        container:"continental, Pizza, Asian,Desserts",
        Url:"https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg"


    },

    {
        id:"card8",
        width:"400px",
        height:"300px",
        background:"gray",
        margine:"30px",
        rating :"4.5",
        voters:"350 votes",
        border:"2px solid black",
        name:"Burger King",
        cost:"cost Rs.600 for one",
        container:"continental, Pizza, Asian,Desserts",
        Url:"https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg"


    },

    {
        id:"card9",
        width:"400px",
        voters:"300 votes",
        height:"300px",
        background:"gray",
        margine:"30px",
        rating :"1.7",
        voters:"300 votes",
        border:"2px solid black",
        name:"Chicken Biryani",
        cost:"cost Rs.600 for one",
        container:"continental, Pizza, Asian,Desserts",
        Url:"https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg"


    },

    {
        id:"card9",
        width:"400px",
        voters:"300 votes",
        height:"300px",
        background:"gray",
        margine:"30px",
        rating :"4.4",
        voters:"200 votes",
        border:"2px solid black",
        name:"MCd",
        cost:"cost Rs.600 for one",
        container:"continental, Pizza, Asian,Desserts",
        Url:"https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg"


    },
    ],rating:0
  }
}
handlClick(rating){
  return this.setState({rating:rating});
}
 render(){
   return(
   <div> 
     <div>
       <button style={{"backgroundColor":"green"}} onClick={()=> this.handlClick(1)} >1+start</button>
       <button style={{"backgroundColor":"green"}} onClick={()=> this.handlClick(2)} >2+start</button>
       <button style={{"backgroundColor":"green"}} onClick={()=> this.handlClick(3)} >3+start</button>
       <button style={{"backgroundColor":"green"}} onClick={()=> this.handlClick(4)} >4+start</button>
       <button  style={{"backgroundColor":"green"}} onClick={()=> this.handlClick(0)} >Clear</button>

     </div>
     {
       this.state.RestaurantDetails.filter(el=>el.rating>this.state.rating).map(el=>{
         return (
          <div style={{"width":"350px","backgroundColor":"white","height":"200px","marginTop":"30px","border":"2px solid gray","background":"white"}}>

          <img src={el.Url} style={{"width":"100px","height":"150px"}}></img>

          <h1 style={{"marginLeft":"100px","marginTop":"-90px","color":"red"}}> {el.name}</h1>

          <p style={{"marginLeft":"100px","marginTop":"-20px"}} > {el.container}</p>

          <p style={{"marginLeft":"100px","marginTop":"-10px"}}> {el.cost}</p>

          <p style={{"display":"flex","float":"left","marginTop":"-100px","background":"green","marginLeft":"300px"}}>{el.rating}</p>

           <p style={{"color":"white","marginLeft":"100px","fontSize":"20px" ,"marginTop":"-10px"}}>{el.voters}

           <ul style={{"marginTop":"-20px","marginLeft":"70px"}}> <li>up to 30min </li></ul></p>
           <button style={{"background":"green","marginLeft":"150px" ,"marginTop":"-150px"}}>Place  Online Order</button>
           </div>
         )
       })}
       </div>
       )
      }
    }
 



export default App;

import React from "react";

 class ShopNow extends React.Component{
     constructor(){
         super();
         this.state={
             value :[
                 {
                     id:"card1",
                     imageurl:"https://cdn.shopify.com/s/files/1/0135/4542/products/IMG_1237dipadj_medium.jpg?v=1561572594",
                     name:"Cuppow Canning Jar Drinking Lid  ",
                     name1:"Regular Mouth - Clear",
                     cost:"$8.99"

                 },
                 {
                    id:"card2",
                    imageurl:"https://cdn.shopify.com/s/files/1/0135/4542/products/BNTO-Pack-3up-adjscaled_medium.jpg?v=1412176479",
                    name:"BNTO Canning Jar Lunchbox Adaptor -  ",
                    name1:"Wide Mouth - 6oz - Clear",
                    cost:"$8.99"

                },
                {
                    id:"card3",
                    imageurl:"https://cdn.shopify.com/s/files/1/0135/4542/products/IMG_1237dipadj_medium.jpg?v=1561572594",
                    name:"Cuppow Canning Jar Drinking Lid  ",
                    name1:"- Regular Mouth - Clear",
                    cost:"$8.99"

                },
                {
                    id:"card4",
                    imageurl:"https://cdn.shopify.com/s/files/1/0135/4542/products/peppahs-2_medium.jpg?v=1403012737",
                    name:"Preserving by the Pint ",
                    name1:" [Signed Hardcover]",
                    cost:"$8.99"

                },
                {
                    id:"card4",
                    imageurl:"https://cdn.shopify.com/s/files/1/0135/4542/products/peppahs-2_medium.jpg?v=1403012737",
                    name:"Preserving by the Pint ",
                    name1:" [Signed Hardcover]",
                    cost:"$8.99"

                },
                {
                    id:"card4",
                    imageurl:"https://cdn.shopify.com/s/files/1/0135/4542/products/peppahs-2_medium.jpg?v=1403012737",
                    name:"Preserving by the Pint ",
                    name1:" [Signed Hardcover]",
                    cost:"$8.99"

                },
                {
                    id:"card4",
                    imageurl:"https://cdn.shopify.com/s/files/1/0135/4542/products/peppahs-2_medium.jpg?v=1403012737",
                    name:"Preserving by the Pint ",
                    name1:" [Signed Hardcover]",
                    cost:"$8.99"

                },
                {
                    id:"card4",
                    imageurl:"https://cdn.shopify.com/s/files/1/0135/4542/products/peppahs-2_medium.jpg?v=1403012737",
                    name:"Preserving by the Pint ",
                    name1:" [Signed Hardcover]",
                    cost:"$8.99"

                },
                {
                    id:"card4",
                    imageurl:"https://cdn.shopify.com/s/files/1/0135/4542/products/peppahs-2_medium.jpg?v=1403012737",
                    name:"Preserving by the Pint ",
                    name1:" [Signed Hardcover]",
                    cost:"$8.99"

                },
                {
                    id:"card4",
                    imageurl:"https://cdn.shopify.com/s/files/1/0135/4542/products/peppahs-2_medium.jpg?v=1403012737",
                    name:"Preserving by the Pint ",
                    name1:" [Signed Hardcover]",
                    cost:"$8.99"

                },
                {
                    id:"card4",
                    imageurl:"https://cdn.shopify.com/s/files/1/0135/4542/products/peppahs-2_medium.jpg?v=1403012737",
                    name:"Preserving by the Pint ",
                    name1:" [Signed Hardcover]",
                    cost:"$8.99"

                },
                {
                    id:"card4",
                    imageurl:"https://cdn.shopify.com/s/files/1/0135/4542/products/peppahs-2_medium.jpg?v=1403012737",
                    name:"Preserving by the Pint ",
                    name1:" [Signed Hardcover]",
                    cost:"$8.99"

                },
                {
                    id:"card4",
                    imageurl:"https://cdn.shopify.com/s/files/1/0135/4542/products/11333307_973319239387371_2007292924_n_medium.jpg?v=1448297084",
                    name:"Preserving by the Pint ",
                    name1:" [Signed Hardcover]",
                    cost:"$10.99"

                },
                {
                    id:"card4",
                    imageurl:"https://cdn.shopify.com/s/files/1/0135/4542/products/11333307_973319239387371_2007292924_n_medium.jpg?v=1448297084",
                    name:"Preserving by the Pint ",
                    name1:" [Signed Hardcover]",
                    cost:"$10.99"

                },
                {
                    id:"card4",
                    imageurl:"https://cdn.shopify.com/s/files/1/0135/4542/products/11333307_973319239387371_2007292924_n_medium.jpg?v=1448297084",
                    name:"Preserving by the Pint ",
                    name1:" [Signed Hardcover]",
                    cost:"$10.99"

                }



             ]
         }
     }
     render(){
         return(
             <div style={{"marginTop":"-120px"}}>
                 <h1 className="w-100 bg-success text-center"> List Of Material</h1>
                 
                 {
                     this.state.value.map(item =>{
                         return(
                             <div className="card float-left  ml-5 col-3 mt-2  bg-gradient-warning">
                                 <img  className="w-100 "src={item. imageurl}></img>
                                 <p  className="ml-2 text-center">  {item.name}</p>
                                 <p className="ml-2 text-center" style={{"marginTop":"-20px"}}> {item.name1}</p>
                                 <p style={{"marginTop":"-20px"}} className="ml-2 text-center"> {item.cost}</p>
                             </div>
                         )
                     })
                 }
                 
             </div>
         )
     }

 }

 export default ShopNow;
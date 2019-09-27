import React from 'react'

const Grow = (props) =>
{
    let b=props.imgg.map(a=>{
        return        <div className="col ">
                      <img src={a.url}></img>
                      <h3>{a.h1}</h3>
        </div>
            
       
     })

 return (
     <div>
     <div className="container-fluid">
         <h1 className="text-left offset-2">How to Sell Online </h1>
         <div className="text-left col-xl-7 offset-2">The Shopify Ecommerce Blog has over many articles about selling products online. From learning how to sell online to advanced tips and tricks, we cover everything you need to know to run a successful online business. Here are some recent posts that talk about selling online:</div>
     </div>
         <div className="container-fluid row col-xl-8 offset-2">
           
             {b}
          
          </div>
          </div>               
         
     )
}
export default Grow;
import React from 'react'

const Business = (props) =>{

    let b=props.imgg.map(a=>{
        return        <div className="col ">
                      <img src={a.url}></img>
                      <h3>{a.h1}</h3>
        </div>
            
       
     })

 return (
     <div>
     <div className="container-fluid offset-2">
            <h3 className="text-left">Business Ideas</h3>
            <p className="text-left w-75">If you’re looking for ready-to-go business ideas, you’re in the right place. The Shopify Ecommerce blog has a collection of articles on different business ideas with details on how to get started, where to source products, industry trends, and tools to help you grow. Find your perfect business idea in our collection of articles below.</p>
     </div>
         <div className="container-fluid row col-xl-8 offset-2">
             
             {b}
          
          </div>
          </div>
 )          
}
export default Business;
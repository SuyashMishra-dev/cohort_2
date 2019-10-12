import React from 'react'
class Bracelates extends React.Component{
    constructor(){
        super();
        this.state={
            Bracelate:[
                {
                    name:"18KT GOLD AND DIAMOND BRACELET",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/501095BSEAA02_1.jpg",
                    price:"₹89,999"
                },
                {
                    name:"18KT GOLD AND DIAMOND BRACELET",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/502014BAAAA02_1.jpg",
                    price:"₹90,999"
                },
                {
                    name:"18KT GOLD AND DIAMOND BRACELET",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/501781NACAA02_1.jpg",
                    price:"₹68,999"
                },
                {
                    name:"18KT GOLD AND DIAMOND BRACELET",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/502014BAAAA02_1.jpg",
                    price:"₹90,999"
                },
                {
                    name:"18KT GOLD AND DIAMOND BRACELET",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/502614BFFAA02_1.jpg",
                    price:"₹87,999"
                },
                {
                    name:"18KT GOLD AND DIAMOND BRACELET",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/502117BNUAA32_1.jpg",
                    price:"85,999"
                },
                {
                    name:"18KT GOLD AND DIAMOND BRACELET",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/502014BAAAA02_1.jpg",
                    price:"₹90,999"
                },
                {
                    name:"18KT GOLD AND DIAMOND BRACELET",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/502117BNUAA32_1.jpg",
                    price:"85,999"
                },
                {
                    name:"18KT GOLD AND DIAMOND BRACELET",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/502117BNUAA32_1.jpg",
                    price:"85,999"
                },
                {
                    name:"18KT GOLD AND DIAMOND BRACELET",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/502014BAAAA02_1.jpg",
                    price:"₹90,999"
                },
                {
                    name:"18KT GOLD AND DIAMOND BRACELET",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/502117BNUAA32_1.jpg",
                    price:"85,999"
                },
                {
                    name:"18KT GOLD AND DIAMOND BRACELET",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/502117BNUAA32_1.jpg",
                    price:"85,999"
                },
                ]
    }
    }
    render(){
        return(
           <div style={{marginTop:"100px",marginLeft:"180px"}}>

               {this.state.Bracelate.map(item=>{
                   return(
                       <div className="card ml-4 mt-4" style={{float:"left",width:"350px",height:"550px",border:"1px solid blue"}}>
                           <img style={{width:"240px",height:"330px",marginLeft:"50px"}} src={item.imgUrl}></img>
                           <hr></hr>
                           <p className="text-center">{item.name}</p>
                           <p className="text-center"><b>{item.price}</b></p>
                           <button className="btn btn-primary w-75 ml-5 mb-1">Add to Card</button>
                       </div>
                   );
               })}
           </div>
            );
    }
  

}
export default Bracelates;
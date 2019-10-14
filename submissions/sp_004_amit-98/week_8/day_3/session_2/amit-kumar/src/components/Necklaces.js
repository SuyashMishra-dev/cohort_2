import React from 'react'
class Necklaces extends React.Component{
    constructor(){
        super();
        this.state={
            Necklaces:[
                {
                    name:"18KT ROSE DIAMOND NECKWEAR",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/500017NHAAA02_1.jpg",
                    price:"₹89,999"
                },
                {
                    name:"18KT GOLD AND DIAMOND NECKWEAR",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/501055NHAAA02_1.jpg",
                    price:"₹90,999"
                },
                {
                    name:"18KT GOLD AND DIAMOND NECKWEAR",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/501781NACAA02_1.jpg",
                    price:"₹68,999"
                },
                {
                    name:"18KT RUBY NECKWEAR EARRINGS SET",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/5110962DCAAA18_1.jpg",
                    price:"₹87,999"
                },
                {
                    name:"22KT GOLD NECKWEAR EARRINGS SET",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/5121132UWABA00_1.jpg",
                    price:"85,999"
                },
                {
                    name:"22KT GOLD NECKWEAR SET",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/5121132VTABA00_1.jpg",
                    price:"90,999"
                },
                {
                    name:"18KT ROSE GOLD NECKWEAR",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/500017NHAAA02_1.jpg",
                    price:"₹89,999"
                },
                {
                    name:"18KT GOLD AND DIAMOND NECKWEAR",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/501055NHAAA02_1.jpg",
                    price:"₹90,999"
                },
                {
                    name:"18KT GOLD AND DIAMOND NECKWEAR",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/501781NACAA02_1.jpg",
                    price:"₹68,999"
                },
                {
                    name:"18KT RUBY NECKWEAR EARRINGS SET",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/5110962DCAAA18_1.jpg",
                    price:"₹87,999"
                },
                {
                    name:"22KT GOLD NECKWEAR EARRINGS SET",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/5121132UWABA00_1.jpg",
                    price:"85,999"
                },
                {
                    name:"22KT GOLD NECKWEAR SET",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/5121132VTABA00_1.jpg",
                    price:"90,999"
                },
                {
                    name:"18KT ROSE DIAMOND NECKWEAR",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/500017NHAAA02_1.jpg",
                    price:"₹89,999"
                },
                {
                    name:"18KT GOLD AND DIAMOND NECKWEAR",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/501055NHAAA02_1.jpg",
                    price:"₹90,999"
                },
                {
                    name:"18KT GOLD AND DIAMOND NECKWEAR",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/501781NACAA02_1.jpg",
                    price:"₹68,999"
                },
                {
                    name:"18KT RUBY NECKWEAR EARRINGS SET",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/5110962DCAAA18_1.jpg",
                    price:"₹87,999"
                }
                ]
    }
    }
    render(){
        return(
           <div style={{marginTop:"100px",marginLeft:"180px"}}>

               {this.state.Necklaces.map(item=>{
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
export default Necklaces;
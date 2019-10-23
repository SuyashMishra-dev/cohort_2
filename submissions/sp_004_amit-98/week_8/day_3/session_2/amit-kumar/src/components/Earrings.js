import React from 'react'
class Earrings extends React.Component{
    constructor(){
        super();
        this.state={
            Earringsitem:[
                {
                    name:"18KT Gold & Diamond",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/502998SNHAGA02_1.jpg",
                    price:10999
                },
                {
                    name:"22KT Gold Hoops",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/513013HVQAAA00_1.jpg",
                    price:20999
                },
                {
                    name:"22KT Gold Hoops",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/513013HZKAAA00_1.jpg",
                    price:30999
                },
                {
                    name:"22KT Gold Hoops",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/501718SFIAAA09_1.jpg",
                    price:40999
                },
                {
                    name:"22KT Gold Hoops",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/505001SDOAGA09_1.jpg",
                    price:50999
                },
                {
                    name:"22KT Gold Hoops",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/505001SDGAGA09_1.jpg",
                    price:20999
                },
                {
                    name:"22KT Gold Hoops",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/505001SDSAGA09_1.jpg",
                    price:30999
                },
                {
                    name:"22KT Gold Hoops",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/511098DPXABAP1_1.jpg",
                    price:50999
                },
                {
                    name:"22KT Gold Hoops",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/511251DQBABAP1_1.jpg",
                    price:"₹20,999"
                },
                {
                    name:"22KT Gold Hoops",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/512016DGDABAP1_1.jpg",
                    price:"₹59,999"
                },
                {
                    name:"22KT Gold Hoops",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/512016DSAABAP1_1.jpg",
                    price:60999
                },
                {
                    name:"22KT Gold Hoops",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/512016SEIABAP1_1.jpg",
                    price:40999
                },
                {
                    name:"22KT Gold Hoops",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/512017DYSABAP1_1.jpg",
                    price:"₹40,999"
                },
                {
                    name:"22KT Gold Hoops",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/511018SMBAGA00_1.jpg",
                    price:20999
                },
                {
                    name:"22KT Gold Hoops",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/512411HBBAAAPL_1.jpg",
                    price:80999
                },
                {
                    name:"22KT Gold Hoops",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/513013HVQAAA00_1.jpg",
                    price:100999
                },
                {
                    name:"22KT Gold Hoops",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/513013HVQAAA00_1.jpg",
                    price:70999
                },
                {
                    name:"22KT Gold Hoops",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/513013HVQAAA00_1.jpg",
                    price:10999
                },
                {
                    name:"22KT Gold Hoops",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/513013HVQAAA00_1.jpg",
                    price:90999
                },
                {
                    name:"22KT Gold Hoops",
                    imgUrl:"https://staticimg.titan.co.in/Tanishq/Catalog/513013HVQAAA00_1.jpg",
                    price:20999
                }
                ]
    }
    }
    render(){
        return(
         <div>
         <div style={{ marginLeft: "600px",marginTop:"120px" }}>
        <div style={{marginLeft:"300px"}}>Sort by Price</div>
          <button className="btn rounded bg-primary ml-3 mt-2" onClick={() => this.handleClick(5000)}> Less than ₹5000</button>
          <button className="btn rounded bg-secondary ml-3 mt-2" onClick={() => this.handleClick(20000)}>₹5000-₹20,000  </button>
          <button className="btn rounded bg-warning ml-3 mt-2" onClick={() => this.handleClick(50000)}>₹20,000-₹50,000</button>
          <button className="btn rounded bg-danger ml-3 mt-2" onClick={() => this.handleClick(150000)}>Above ₹50,000</button>
          <button className="btn rounded bg-danger ml-3 mt-2" onClick={() => this.handleClick(0)}>Clear</button>
        </div>
           <div style={{marginTop:"100px",marginLeft:"180px"}}>

               {this.state.Earringsitem.map(item=>{
                   return(
                       <div className="card ml-4 mt-4" style={{float:"left",width:"350px",height:"500px",border:"1px solid blue"}}>
                           <img style={{width:"240px",height:"330px"}} src={item.imgUrl}></img>
                           <hr></hr>
                           <p className="text-center">{item.name}</p>
                           <p className="text-center"><b>₹{item.price}</b></p>
                           <button className="btn btn-primary w-75 ml-5">Add to Card</button>
                       </div>
                   );
               })}
           </div>
           </div>
            );
    }
  

}
export default Earrings;
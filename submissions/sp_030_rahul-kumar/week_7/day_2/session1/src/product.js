import  React from 'react'

// class Coder extends React.Component{
//     render (){
//       const arr =[
//                  {Header1: 'Mobile Operating System',items: 'Android'},
//                  {items: 'Blackberry'},
//                  {items: 'iPhone'},
//                  {items: 'Windows'},
//                  {Header1: 'Mobile Manufacturers',items: 'Samsung'},            
//                  {items: 'HTC'},
//                  {items: 'Micromax'},
//                  {items: 'Apple'},
//                ]
//         return( 
//                arr.map(item=>{return(
//                <div>
//                <h1>{item.Header1}</h1>
//                 <ul><li>{item.items}</li></ul>
//                </div>
//                );
//           })
//          )  
//        }
//    }
   
//    export default Coder;
function Product (props){
    console.log(props)
    return(
        <div>
        <h1>{props.List.header}</h1>
        <ul><li>{props.List.name}</li></ul>
        </div>
    )
}
export default Product;
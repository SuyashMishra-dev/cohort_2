import React from 'react'

const Head = (props) =>
{   
        let b=props.imgg.map(a=>{
           return        <div className="col ">
                         <img className="rounded   " src={a.url}></img>
                         <h3>{a.h1}</h3>
           </div>
               
          
        })

    return (
            <div className="container-fluid row col-xl-8 offset-2">
              
                {b}
             
             </div>
                            
            
        )
}

export default Head;
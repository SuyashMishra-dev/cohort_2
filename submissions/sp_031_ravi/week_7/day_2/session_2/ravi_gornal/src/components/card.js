import React from 'react'

function Breakfast(props) {
    var i = -1;
    return(
        <div className="row">
            {props.input.map(a => {
                i++;
    return(
        <div className="row ml-3 " key={i}  >
            <div className="m-2">
                <div class="card" style={{width: "24rem"}}>
                    <img src={a.image} class="card-img-top" alt="..." style={{width:"382px",height:"300px"}}/>
                    <div class="card-body">
                        <div>
                            <h5 class="card-title">{a.name}</h5>
                            <div className="rating">{a.rating} <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678064-star-128.png" width="20px" height="20px"></img></div>
                            <p>{a.votes} votes</p>
                        </div>
                        <hr></hr>
                        <p><b>CUISINES: </b>{a.Cuisines}</p>
                        <hr></hr>
                        <p><b>COST : </b>{a.Cost}</p>
                        <hr></hr>
                        <p>FEATURED IN : {a.Featured}</p>                    
                        <a class="btn btn-success"> <img src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-01-512.png" width="30px" height="30px"></img>Order Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
            }
            )
        }
           
        </div>
    )
}

export default Breakfast;
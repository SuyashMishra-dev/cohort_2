import React from "react";
import { Link} from "react-router-dom";
class Trending extends React.Component {
  constructor() {
    super();
    this.state = {
      Trendings: [
        {
          name: "Earrings",
          imgUrl: "https://staticimg.titan.co.in/Mia/Catalog/552817DCVAAA37_1.jpg",
          price: "₹40,999"
        },
        {
          name: "Bangle",
          imgUrl: "https://www.tanishq.co.in/wps/wcm/connect/tanishq/13b61666-3c4e-4fdb-b1ce-4f8149e843b1/images%252Fkarwa-chauth.png?MOD=AJPERES&CVID=",
          price: "₹60,999"
        },
        {
          name: "Necklace",
          imgUrl: "https://www.tanishq.co.in/wps/wcm/connect/tanishq/3d49adaa-ba65-4d8c-87c4-a72067fe1572/images%252Fahalya%252Fimg2.png?MOD=AJPERES&CVID=",
          price: "₹30,999"
        },
        {
          name: "Hope Earrings",
          imgUrl: "https://ak0.scstatic.net/1/cdn2-cont13.sweetcouch.com/150946424040571662-tanishq-22kt-yellow-gold-hoop-earring.jpg",
          price: "₹20,999"
        },
        {
          name: "Rings",
          imgUrl: "https://staticimg.titan.co.in/Mia/Catalog/552811FRPAA22_1.jpg?pView=listing",
          price: "₹90,999"
        }
      ]
    }
  }
  render(){
      return(
          <div>
          <div style={{ marginTop: "100px" }}>
         <Link to="/shop"><img style={{ background: "yellow", border: "1px solid black" }} src="https://cdn.shopify.com/s/files/1/0068/1062/t/6/assets/slideshow_5.jpg?791"></img></Link>
          <h1 style={{ textAlign: "center", marginTop: "10px" }}>Trending Items</h1>
          <hr></hr>
          <div style={{ marginLeft: "250px" }}>
            {
              this.state.Trendings.map(items => {
                return (
                  <div className="card" style={{ width: "250px", float: "left", marginLeft: "30px" }}>
                    <img src={items.imgUrl} style={{ width: "230px", height: "200px" }}></img>
                    <hr></hr>
                    <p style={{ textAlign: "center" }}>{items.name}</p>
                    <p style={{ textAlign: "center", fontWeight: "bold" }}>{items.price}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
        </div>
      );
  }
}
export default Trending;
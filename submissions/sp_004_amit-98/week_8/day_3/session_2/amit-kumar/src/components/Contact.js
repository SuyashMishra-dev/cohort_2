import React from "react";
class Lookbook extends React.Component {
  constructor() {
    super();
    this.state = {
      Lookbooks: [
        {
          name: "Earrings",
          imgUrl: "https://www.tanishq.co.in/wps/wcm/connect/tanishq/3da153bb-9189-40de-940e-c5155b08b515/Guides-Ecomm-Banner-2.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-3da153bb-9189-40de-940e-c5155b08b515-mI.BRFo",
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
        },
        {
          name: "Pendent",
          imgUrl: "https://staticimg.titan.co.in/Mia/Catalog/552811PTWAAA00_1.jpg",
          price: "₹10,999"
        },
        {
          name: "Pendent",
          imgUrl: "https://staticimg.titan.co.in/Tanishq/Catalog/502998SADAAA22_1.jpg",
          price: "₹10,999"
        },
        {
          name: "Pendent",
          imgUrl: "https://staticimg.titan.co.in/Tanishq/Catalog/501718SGLAAA09_1.jpg",
          price: "₹10,999"
        },
        {
          name: "Pendent",
          imgUrl: "https://staticimg.titan.co.in/Mia/Catalog/552811SSNABA22_1.jpg",
          price: "₹10,999"
        },
        {
          name: "Pendent",
          imgUrl: "https://staticimg.titan.co.in/Mia/Catalog/552818BMCAA22_1.jpg",
          price: "₹10,999"
        },
        {
          name: "Pendent",
          imgUrl: "https://staticimg.titan.co.in/Tanishq/Catalog/502999SYTAAA09_1.jpg",
          price: "₹10,999"
        }
        , {
          name: "Pendent",
          imgUrl: "https://staticimg.titan.co.in/Tanishq/Catalog/511240FABAA00_1.jpg",
          price: "₹10,999"
        }
        , {
          name: "Pendent",
          imgUrl: "https://staticimg.titan.co.in/Mia/Catalog/552811PTWAAA00_1.jpg",
          price: "₹10,999"
        }
        , {
          name: "Pendent",
          imgUrl: "https://staticimg.titan.co.in/Mia/Catalog/552811PTWAAA00_1.jpg",
          price: "₹10,999"
        }
        , {
          name: "22KT GOLD MARIGOLD EARRINGS",
          imgUrl: "https://staticimg.titan.co.in/Tanishq/Catalog/511618DBSAGA00_1.jpg",
          price: "₹10,999"
        }
        , {
          name: "22KT GOLD ARROW FINGER RING",
          imgUrl: "https://staticimg.titan.co.in/Tanishq/Catalog/510783FJAAA00_1.jpg",
          price: "₹10,999"
        }
        , {
          name: "Pendent",
          imgUrl: "https://staticimg.titan.co.in/Mia/Catalog/552811PTWAAA00_1.jpg",
          price: "₹10,999"
        }
        , {
          name: "Rings",
          imgUrl: "https://staticimg.titan.co.in/Tanishq/Catalog/502117FDMAA02_1.jpg",
          price: "₹10,999"
        }
        , {
          name: "Rings",
          imgUrl: "https://staticimg.titan.co.in/Tanishq/Catalog/501135FBDAA02_1.jpg",
          price: "₹10,999"
        }
        , {
          name: "Pendent",
          imgUrl: "https://staticimg.titan.co.in/Mia/Catalog/552811PTWAAA00_1.jpg",
          price: "₹10,999"
        }
      ]
    }
  }
  render() {
    return (
      <div style={{ marginTop: "100px", marginLeft: "100px" }}>
        <h2 style={{ textAlign: "center" }}>Collections</h2>
        {
          this.state.Lookbooks.map(items => {
            return (
              <div className="card" style={{ width: "300px", float: "left", marginLeft: "30px", marginBottom: "20px" }}>
                <img src={items.imgUrl} style={{ width: "280px", height: "200px" }}></img>
                <hr></hr>
                <p style={{ textAlign: "center" }}>{items.name}</p>
                <p style={{ textAlign: "center", fontWeight: "bold" }}>{items.price}</p>
                <button className="btn btn-primary" >BUY</button>
              </div>
            )
          })
        }
      </div>

    );
  }
}
export default Lookbook;
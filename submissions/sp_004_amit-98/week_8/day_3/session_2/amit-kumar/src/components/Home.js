import React from "react";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      Trending: [
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
        },
        {
          name: "Pendent",
          imgUrl: "https://staticimg.titan.co.in/Mia/Catalog/552811PTWAAA00_1.jpg",
          price: "₹10,999"
        }
      ]
    }
  }
  render() {
    return (
      <div>

        <div style={{ marginTop: "100px" }}>
          <img style={{ background: "yellow", border: "1px solid black" }} src="https://cdn.shopify.com/s/files/1/0068/1062/t/6/assets/slideshow_5.jpg?791"></img>
          <h1 style={{ textAlign: "center", marginTop: "10px" }}>Trending Items</h1>
          <hr></hr>
          <div style={{ marginLeft: "280px" }}>
            {
              this.state.Trending.map(items => {
                return (
                  <div className="card" style={{ width: "180px", float: "left", marginLeft: "30px" }}>
                    <img src={items.imgUrl} style={{ width: "170px", height: "200px" }}></img>
                    <hr></hr>
                    <p style={{ textAlign: "center" }}>{items.name}</p>
                    <p style={{ textAlign: "center", fontWeight: "bold" }}>{items.price}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <hr></hr>
        <h1 style={{ textAlign: "center", clear: "both", marginTop: "50px" }}>SHOP</h1>
        <hr></hr>
        <div style={{ marginLeft: "200px" }}>
          <img src="https://cdn.shopify.com/s/files/1/0068/1062/t/6/assets/banner-home-bottom-1.jpg?791" style={{ width: "400px", float: "left", marginLeft: "50px" }}></img>
          <img src="https://cdn.shopify.com/s/files/1/0068/1062/t/6/assets/banner-home-bottom-2.jpg?791" style={{ width: "400px", float: "left", marginLeft: "50px" }}></img>
          <img src="https://cdn.shopify.com/s/files/1/0068/1062/t/6/assets/banner-home-bottom-3.jpg?791" style={{ width: "400px", float: "left", marginLeft: "50px" }}></img>
        </div>
        <div style={{ background: "wheat", width: "100%", marginTop: "500px", height: "500px" }}>
          <h2 style={{ textAlign: "center", marginTop: "50px" }}>@Kohinoor_official on Instagram</h2>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ28_FIsC6_FKu7wJvdf9-XqEVhhGDYnN3qSu1UbML7zTARUh_d" style={{ width: "300px", height: "400px", float: "left", marginLeft: "50px" }}></img>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrlkjK_4ekDO896EW6NkUw569OA7j9EeVNLDt0_uyJMc9N9zv14A" style={{ width: "300px", height: "400px", float: "left", marginLeft: "50px" }}></img>
          <img src="https://dqg5fqdy33g0r.cloudfront.net/photos/event-planner/delhi-ncr/ambala-city/nizamuddin/eventila/1508808761448/logo_UXYi448tgY." style={{ width: "300px", height: "400px", float: "left", marginLeft: "50px" }}></img>
          <img src="https://blog.bridals.pk/wp-content/uploads/2019/01/jaipur-1-min-1.jpg" style={{ width: "300px", height: "400px", float: "left", marginLeft: "50px" }}></img>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBEZeSm49knvv0wF5RRTatK1ijDr_63Hc2BInToiutfWKjVG--3A" style={{ width: "300px", height: "400px", float: "left", marginLeft: "50px" }}></img>

          <button className="btn btn-dark" style={{ clear: "both", marginLeft: "800px", width: "200px", marginTop: "10px" }}>SEE MORE</button>
        </div>
        <div>
          <footer className="page-footer font-small pt-4" style={{ background: "#302F29" }}>
            <div className="container-fluid text-center text-white text-md-left">
              <div className="row">
                <hr className="clearfix w-100 d-md-none pb-3"></hr>

                <div className="col-md-2 mb-md-0 mb-3" style={{ marginLeft: "200px" }}>
                  <h5>CUSTOMER CARE</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-white" href="#">Contact</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">Shipping</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">Customer Service</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">Gift Certificates
                     </a>
                    </li>
                    <li>
                      <a className="text-white" href="#">Discount Codes
                     </a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-2 mb-md-0 mb-3">
                  <h5>INFORMATION</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-white" href="#">Wholesale</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">Policies</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">Blog</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">Collaborations</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2 mb-md-0 mb-3 ">
                  <h5>STOCKISTS</h5>
                  <ul className="list-unstyled text-white">
                    <li>
                      <a className="text-white" href="#">Bengaluru</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">Mumbai</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">Singapore</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">Kolkata</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-md-0 mb-3">
                  <h5>STAY CONNECTED</h5>
                  <img src="https://blog.addthiscdn.com/wp-content/uploads/2015/11/twitter.jpg" className="border-round" style={{ width: "50px", height: "50px", float: "left" }}></img>
                  <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjoresablount%2Ffiles%2F2019%2F08%2Funnamed-1200x1191.jpg" className="border-round" style={{ width: "50px", height: "50px", float: "left", marginLeft: "30px" }}></img>
                  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/4a/d8/6b/4ad86bba-bcfb-90d2-ebb4-9da0d26de717/AppIcon-0-1x_U007emarketing-0-0-0-85-220-0-6.png/1024x1024bb.jpg" className="border-round" style={{ width: "50px", height: "50px", float: "left", marginLeft: "30px" }}></img>
                  <div>
                    <h6 style={{ clear: "both", marginTop: "70px" }}>GET THE GOOD STUFF</h6>
                    <input style={{ background: "transparent", color: "white" }}></input>
                    <button style={{ marginLeft: "20px", background: "gray", border: "1px solid gray", color: "white" }}>SUBSCRIBE</button>
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ background: "whitesmoke" }}></hr>
            <div className="footer-copyright text-center py-3 text-white">© 2018 Copyright:
            <a href="https://mdbootstrap.com/education/bootstrap/" className="text-white"> kohinoor.com</a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
export default Home;

import React from "react";
class Instagram extends React.Component {
  constructor() {
    super();
    this.state ={
        InstaPic: [
           {imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ28_FIsC6_FKu7wJvdf9-XqEVhhGDYnN3qSu1UbML7zTARUh_d"},
           {imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrlkjK_4ekDO896EW6NkUw569OA7j9EeVNLDt0_uyJMc9N9zv14A"},
           {imgUrl:"https://dqg5fqdy33g0r.cloudfront.net/photos/event-planner/delhi-ncr/ambala-city/nizamuddin/eventila/1508808761448/logo_UXYi448tgY."},
           {imgUrl:"https://blog.bridals.pk/wp-content/uploads/2019/01/jaipur-1-min-1.jpg"},
           {imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBEZeSm49knvv0wF5RRTatK1ijDr_63Hc2BInToiutfWKjVG--3A"} 
     
        ]
    }
}
render(){
    return(
        <div>
          <div style={{ background: "wheat", width: "100%", marginTop: "500px", height: "500px" }}>
          <h2 style={{ textAlign: "center", marginTop: "50px" }}>@Kohinoor_official on Instagram</h2>
        {
            this.state.InstaPic.map(items=>{
                return <img src={items.imgUrl} style={{ width: "300px", height: "400px", float: "left", marginLeft: "50px" }}></img>
            })
        }
          <button className="btn btn-dark" style={{ clear: "both", marginLeft: "800px", width: "200px", marginTop: "10px" }}>SEE MORE</button>
        </div>
        </div>
    );

}
}
export default Instagram;
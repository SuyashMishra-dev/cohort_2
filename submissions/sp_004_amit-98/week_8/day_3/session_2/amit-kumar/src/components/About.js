import React from "react";
import Footer from "./Footer";
const About = () => {
  return (
    <div>
    <div>
      <div style={{ marginTop: "100px", float: "left" }}>
        <img src="https://i.pinimg.com/originals/a6/cb/b4/a6cbb43cc5d2877e1961106b046d0df5.jpg" style={{ width: "500px", height: "800px", marginLeft: "200px" }}></img>
      </div>
      <div style={{ marginTop: "100px", marginLeft: "80px", float: "left", width: "700px" }}>
        <h5 style={{ fontWeight: "bold", marginTop: "100px" }}>THE BRAND</h5>
        <p>
          Kohinoor is a ‘modern nostalgic’ jewelry brand. Each piece is conceptualized and
          hand-crafted with love by a small team in Bengaluru, led by founder Amit Kumar.
          Born in 2019, Kohinoor draws inspiration from global treasures and found curiosities that
          translate into wearable, contemporary silhouettes. Kohinoor marries vintage inspiration with
          sleek mixed metals, hand-cast pendants and natural stones to create high-quality,
          versatile pieces that tell a story.
      </p>
        <h5 style={{ fontWeight: "bold", marginTop: "100px" }}>THE DESIGNER</h5>
        <p>
          Born and raised in Bengaluru, Corrine Anestopoulos is inspired by contemporary design and
          exotic heirlooms from around the world. Behind Kohinoor for last 2 days, Amit has become
           an inspirational entrepreneur, mentor and colleague to many creative businesses in North America.
           Amit graduated in 2019 with a Bachelor of Technology as well as design from Delhi University.
           Her artistry combines attention to detail, assorted materials and symbolic design elements.
      </p>
      </div>
      </div>
      <div style={{clear:"both"}} >
      <Footer />
      </div>
    </div>
  );
};
export default About;
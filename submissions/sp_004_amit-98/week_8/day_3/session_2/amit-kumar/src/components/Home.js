import React from "react";
import Trending from './Trending.js'
import Shop from "./Shop.js";
import Instagram from "./Instagram.js";
import Footer from "./Footer.js"
class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
      <Trending />
      <Shop />
      <Instagram />
      <Footer />
      </div>
    );
  }
}
export default Home;

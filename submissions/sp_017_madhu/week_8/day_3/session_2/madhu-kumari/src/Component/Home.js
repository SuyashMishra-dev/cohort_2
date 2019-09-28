import React from "react";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <div>
      <div className="p-3 mb-2 bg-light text-dark text-center">
        <h1 className="text-center mt-5">Last chance to save on a Mac for college.</h1>
        <p className="text-center">Save up to $200 on a Mac and get Beats on us. Offer ends 9/26.</p>
        <a href="#" >Shop ></a>
      </div>

      <div className="p-3 mb-2 bg-light text-dark text-center">
        <h4 className="mt-5">MacBook Air</h4>
        <h1 className=" display-4 font-weight-bold">Lightness strikes again.</h1>
        <p className="text-center">Save up to $200 on a Mac and get Beats on us. Offer ends 9/26.</p>
        <h3 className="display-4" ><a href="#"><small> Learn more ></small></a><a href="#"><small> &nbsp;&nbsp;&nbsp; Buy ></small></a></h3>
      </div>
    </div>

  );
};

export default Home;

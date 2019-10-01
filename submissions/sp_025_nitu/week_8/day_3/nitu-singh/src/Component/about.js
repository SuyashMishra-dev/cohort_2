import React from 'react';

const About= ()=>{
return(
       <div>
            <div className="card bg-success mb-4"> 
            <h2 className="ml-3 ">About </h2>
            <h1 className="text-warning mt-3 ml-3"> MISSION</h1>
            <p className="ml-3 mt-4"> Cuppow is an American company that develops everyday products that help us live a low-impact<br></br> life.</p>
            <h2 className="ml-3 mt-4">HOW IT STARTED </h2>
            <p className="mt-4 ml-3 text-white"> Cuppow started by developing a product that would help us decrease our own environmental <br></br>footprint. Our flagship product is the Cuppow drinking lid for canning jars, a simple adaptor that<br></br> allows people to upcycle an everyday item into the only travel mug they’ll ever need. We bring<br></br> this same intention into all of our products by designing for utility and simplicity.</p>
            <h1 className="text-warning mt-3 ml-3"> CORE VALUES</h1>
            <p className="ml-3 mt-4">We develop quality products robust enough to last a lifetime </p>
            <p className="mt-4 ml-3 text-white"> Our products are designed so we can have a lower impact on the world around us. We develop <br></br>products that can be used everyday as alternatives to disposables. We want these things to be <br></br>go-tos, the items you don’t leave home without. Take them everywhere you go, every day, and<br></br> enjoy using them every single time you do.</p>
            <p className="ml-3 mt-4"> We use only domestic options in our supply, manufacturing, and<br></br>
            fulfillment</p>
            <p className="mt-4 ml-3 text-white">We’re an American company, so we support American jobs. We believe that a strong and healthy <br></br>country is founded on good work, so we do our best to support this: all of the vendors in our <br></br>supply chain share our values and are companies that we believe in. Our work builds community, <br></br>and we don’t see the point in making sustainable products that are shipped here from overseas.

            We encourage customers to buy from local brick and mortar stores in the hopes of supporting<br></br> vibrant Main Streets in every town. This way, the cash you spend on our products stays locally<br></br> within your community. </p>
            </div>
           <br></br>
           <div  style={{"height":"300px"}}className="bg-white w-100 bg-gradient-light card ">
            <p className="mt-5 ml-5 text-dark "> CUPPOW products are MADE IN THE USA from BPA FREE,<br></br> RECYCLED, and RECYCLABLE materials.</p>
            <div>
            <img className=" ml-5 mt-3 float-left" style={{"width":"100px"}} src =" https://cdn.shopify.com/s/files/1/0135/4542/files/made_in_usa_logo1.png"></img>
            <img className=" ml-2 mt-3 float-left" style={{"width":"100px"}} src =" https://cdn.shopify.com/s/files/1/0135/4542/files/CHARITY-Badge-SELECT-FINb.png"></img>
            </div>
        </div>
    </div>
);
}
export default About;
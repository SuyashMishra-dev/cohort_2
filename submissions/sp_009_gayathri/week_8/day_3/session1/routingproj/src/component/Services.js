    import React from "react";
    import styles from "./routestyle.css"; 


const Services = () => {
    return(
<div>
          <div className = {styles.textSizeCenter}>
          <h3>The Zerodha Universe</h3>
          </div>
          <div>
            <div className= {styles.paratxt2}>
            <h5>A whole ecosystem of modern investment apps</h5> 
            <h5>tailored to specific needs, built from the ground up </h5> 
            
</div>
</div>
<div>
<div class="container">
   <div class="row">
    <div class="col-sm-12 col-md-6 alignPos">
    <h2> Unbeatable pricing </h2>
    <p>We pioneered the concept of discount broking and price </p>
    <p>transparency in India.Flat fees and no hidden charges.</p>
     </div>
     </div>

     <div class="col-sm-12 col-md-6 float-right">
       <div class="col-6 float-left d-inline-flex box"> 
         <div class="classbox">
             <div class="pricing-box">
                <h1>₹0</h1>
                <p>Free equity delivery and direct mutual funds</p>
              </div>
            </div>
            </div>
            <div class="col-6 float-right d-inline-flex box"> 
             <div class="classbox">
             <div class="pricing-box">
                <h1>₹20</h1>
                <p>Intraday and F&amp;O</p>
              </div>
            </div>
          </div>
        </div>        
      </div>
     </div>
     </div>


    );
};

export default Services;

import React from 'react';
import logo from './acko_logo.png';
import logo1 from './worldcupBanner.png';
import logo2 from './socialproofsreweb.png';
import logo3 from './starPurple.png';
import logo4 from './emptyplaceholder.png';
import logo5 from './customIm.png';
import logo6 from './Homepage_Killer_Prices.svg';
import logo7 from './Homepage_Terribly_Convenient.svg';
import logo8 from './Homepage_Stress_Free_Claims.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <p className="Gen-text">
          GENERAL INSURANCE 
        </p>
        <small className = "Grey-text">IRDAI Regn No. 157</small>
        </div>
        
        <p className="App-link1">PRODUCTS</p>
        <p className="App-link2">CLAIMS</p> 
        <a className="App-link3">Login</a>
      </header>
      
      <header className="App-header1">
        <img src={logo1} className="App-image" alt="logo" />
        
        <div>
        <p className="Car-text">
          CAR
        </p>
        <p className="Bike-text">
          BIKE
        </p>
        <h1>The no-brainer choice for car & bike insurance</h1>
        <small className="secure-text">Secure your car instantly at insanely low premiums</small>
        <div>
          <label for="name"></label>
          <input type="text" name = "name" class = "inputCustomer" placeholder = "Your car number"/>
          <label for="submit"></label>
          <button name="submit" id="submitButton">View Prices</button>
        </div>
        <div>
          <p className="purple-link">Don't know your car number ></p>
          <p className="below-purplelink">Already Bought an Acko Policy?<small className="purple-link">  Renew Now!</small></p> 
        </div>
        </div>
      </header>
      
      <header className="third-header">
          <img src={logo2} className="App-image2" alt="..."/>
        </header>
      
      <header className="fourth-header">
        <div>
          <img src={logo3} className="App-image3" alt="..."/>
          <img src={logo3} className="App-image3" alt="..."/>
          <img src={logo3} className="App-image3" alt="..."/>
          <img src={logo3} className="App-image3" alt="..."/>
          <img src={logo3} className="App-image3" alt="..."/>
          <h3>Rasmit loved the killer prices</h3>
          <small>Acko's price was almost 50% less than other insurers for Comprehensive car insurance. Surprised!</small>
        </div>
        <img src={logo4} className="App-image3" alt="..."/>
          <p className="bigFont">Rasmit Kumar Parida</p>
          <small>Maruti Swift Owner, Bengaluru</small>
        <div>
        <div>
          <img src={logo3} className="App-image3" alt="..."/>
          <img src={logo3} className="App-image3" alt="..."/>
          <img src={logo3} className="App-image3" alt="..."/>
          <img src={logo3} className="App-image3" alt="..."/>
          <img src={logo3} className="App-image3" alt="..."/>
        <h3>Subha loved our seamless claims experience</h3>
          <small>From query to delivery, Acko's quick Turnaround Time made sue my experience was completely hassle-free</small>
        </div>
        <img src={logo4} className="App-image3" alt="..."/>
          <p className="bigFont">Subha Dip</p>
          <small>Nissan Owner, Bengaluru</small>
        </div>
      </header>
      
      <img src={logo5} className="customIm" alt="..."/>
      
      <header className="fifth-header">
      <img src={logo6} className="Homepagekiller" alt="..."/>
      <p>INCREDIBLY LOW PRICES</p>
        <h2>Prices That Can't Get Any Better.</h2>
          <p>We spend a lot less on running an insurance company when you buy directly form us. We simply pass on the savings to you.
          Also, by creating a community of great drivers who take care of their cars, we ensure that your premiums decrease generously.
          So just sit back, as we blow your mind off with our amazing deals.
          </p>
      </header>
      
      <header className="fifth-header">
      <img src={logo7} className="Homepageterrible" alt="..."/>
        <p>TERRIBLY CONVENIENT</p>
        <h2>One Tap To Do It All</h2>
        <p>We hate paperwork as much as you do. That’s why we help you deal with insurance instantly, simply at the tap of a button. 
          Whether it’s purchase, support, claims, or renewal, our support team is always here for you.
          </p>
      </header>
      
      <header className="fifth-header">
        <img src={logo8} className="Homepagestress" alt="..."/>
          <p>ZERO-HASSLE CLAIMS</p>
        <h2>Throw Stress Out Of The Window</h2>
          <p>Our claims are so stress-free, it’s like taking an afternoon nap. Just give us a call and we’ll take care of everything - from picking up your car, 
          to getting it repaired and dropping it back right at your doorstep.
          </p>
      </header>  
    </div>
     <footer>  
     <div className="footerend">
           <p className="Boldwhite">CIN:<span>U66000MH2016PLC287385</span></p>
       </div>
       </footer> 
       </div>
  );
}

export default App;

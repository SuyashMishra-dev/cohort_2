import React from 'react';
import './App.css';
import OperatingSystem from './components/A1/OperatingSystem';
import Buttons from './components/A2/Buttons';
import './components/styles.css';
import Profile from './components/A3/Profile';

const os = {
  heading : 'Mobile Operating System',
  list1 : 'Android',
  list2 : 'Blackberry',
  list3 : 'iPhone',
  list4 : 'Windows Phone'
}

const manufac = {
  heading : 'Mobile Manufacturers',
  list1 : 'Samsung',
  list2 : 'HTC',
  list3 : 'Micromax',
  list4 : 'Apple'
}

const profileInfo = {
      url : "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg",
      name : "Ricky Park",
      location : "NEW YORK",
      description : "User interface designer and front-end developer",
      skills : ["UI/UX", "Front End Development", "HTML", "CSS", "JavaScript", "React", "Node"]
}

function App() {

  return (
    <div>
      
      <OperatingSystem osInfo={os} makerInfo={manufac} />

      <div className = "Float">
        <Buttons label="JOINUS" color="blue"/>
        <Buttons label="SETTINGS" color="skyblue"/>
      </div>
      <div>
        <Buttons label="LOGIN" color="orange"/>
        <Buttons label="CONTACT US" color="maroon"/>
      </div>
      <div className = "Float">
        <Buttons label="SEARCH" color="seagreen"/>
        <Buttons label="HELP" color="purple"/>
      </div>
      <div>
        <Buttons label="HOME" color="pink"/>
        <Buttons label="DOWNLOAD" color="brown"/>
      </div>

      <Profile profileData={profileInfo} />
    </div>
  );

}





export default App;

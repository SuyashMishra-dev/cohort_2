import React from 'react';
import './App.css';
import MobileOs from './components/A1/MobileOs';
import MobileManufacturers from './components/A1/MobileManufacturers';
import ContactButton from './components/A2/Contact';
import DownloadButton from './components/A2/Download';
import HelpButton from './components/A2/Help';
import HomeButton from './components/A2/Home';
import JoinUsButton from './components/A2/JoinUs';
import LoginButton from './components/A2/Login';
import SearchButton from './components/A2/Search';
import SettingsButton from './components/A2/Settings';


function App() {
  return (
    <div className="App">
      <MobileOs />
      <MobileManufacturers />
      <div>
        <ContactButton />
        <DownloadButton />        
      </div>
      <div>
        <HelpButton />
        <HomeButton />        
      </div>
      <div>
        <JoinUsButton />
        <LoginButton />        
      </div>
      <div>
        <SearchButton />
        <SettingsButton />        
      </div>
      <br />
      <br />
    </div>
  );
}

export default App;

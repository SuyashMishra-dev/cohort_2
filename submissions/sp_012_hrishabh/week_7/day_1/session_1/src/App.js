import React from 'react';
import './App.css';
import MobileList from './mobile.js';
import JoinUs from './joinUs.js';
import Card from './card.js';
function App () {
  return (
    <div>
      <div>
      <MobileList />
      </div>
      <div>
      <JoinUs />
      </div>
      <div>
        <Card />
      </div>

    </div>

  );
}

export default App;

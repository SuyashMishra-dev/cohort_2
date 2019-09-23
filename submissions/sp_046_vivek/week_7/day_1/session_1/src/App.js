import React from 'react';
import logo from './logo.svg';
import './App.css';
import A1 from './component/A1/a1';
import A3 from './component/A3/a3';
import JOIN from './component/A2/join';
import SETTING from './component/A2/setting';
import LOGIN from './component/A2/login';
import CONTACT from './component/A2/contact';
import SEARCH from './component/A2/search';
import HELP from './component/A2/help';
import HOME from './component/A2/home';
import DOWNLOAD from './component/A2/download';

function App() {
  return (
    <div className="App">
      <A1/>
      <td>
      <JOIN/>
      <LOGIN/>
      <SEARCH/>
      <HOME/>
      </td>
      <td>
      <SETTING/>
      <CONTACT/>
      <HELP/>
      <DOWNLOAD/>
      </td>
      <A3/>
    </div>
  );
}

export default App;

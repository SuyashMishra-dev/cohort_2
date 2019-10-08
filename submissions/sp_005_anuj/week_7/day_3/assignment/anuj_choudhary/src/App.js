import React from 'react';
import './App.css';
import Stopwatch from './component/stopwatch';
import Timer from './component/timer';

function App() {
  return (
    <div className = "App">
      <Stopwatch/>
      <Timer />
    </div>
  );
}

export default App;

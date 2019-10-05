import React from 'react';
import { render } from 'react-dom';
import Stock from './Chart'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Stock />
  </div>
);
export default App;
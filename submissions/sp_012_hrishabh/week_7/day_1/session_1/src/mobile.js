import React from 'react';
import './App.css';
class MobileList extends React.Component {
     render () {
        return (
    <div>
        <h2>
        Mobile operating System
      </h2>
      <ul>
        <li>Android</li>
        <li>Blackberry</li>
        <li>iPhone</li>
        <li>Windows Phone</li>
      </ul>
    
      <h2>
        Mobile Manufactures
      </h2>
      <ul>
        <li>Samsung</li>
        <li>HTC</li>
        <li>Micromax</li>
        <li>Apple</li>
      </ul>
    </div>        
    );
}
}

export default MobileList;
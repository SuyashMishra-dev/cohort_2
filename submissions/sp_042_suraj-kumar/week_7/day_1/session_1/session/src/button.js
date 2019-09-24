import React from 'react';
import './button.css';
function Button() {
  return (
    <div>
      <div>
        <button className="button">Join us</button>
        <button className="button1">Setting</button>
        <br />
      </div>
      <div>
        <button className="button2">Log in</button>
        <button className="button3">Contact US</button>
        <br />
      </div>
      <button className="button4">Search</button>
      <button className="button55">Help</button>

      <br />
      <div>
        <button className="button6">Home</button>
        <button className="button7">Download</button>
      </div>
    </div>
  );
}

export default Button;
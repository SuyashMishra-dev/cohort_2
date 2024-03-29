import React from 'react';
// import logo from './logo.svg';
import '../../App.css';

function Card() {
  return (
    <div>
        <div class="card" style={{width: 400}}>
            <img style={{background: '#311b92'}} src="https://i.stack.imgur.com/12F8N.png" class="card-img-top" alt="..." />
            <div class="card-header text-center" style={{background: '#311b92'}}>
                <h4 class="card-title text-light">Ricky Park</h4>
                <h6 class="card-text text-light">NEW YORK</h6>
                <h6 class="text-light">User interface designer and front-end developer</h6>
                <button class="btn btn-info" style={{color: 'purple'}}>Message</button>
                <button class="btn btn-outline-info">Following</button>
            </div>
            <div class="card-body" style={{background: 'purple'}}>
                <h6 style={{color: 'white'}} >SKILLS</h6>
                <span class="border border-white p-1 rounded">UI/UX</span>
                <span class="border border-white p-1 rounded">Front End Development</span>
                <span class="border border-white p-1 rounded">HTML</span>
                <span class="border border-white p-1 rounded">CSS</span>
                <span class="border border-white p-1 rounded">Javascript</span>
                <span class="border border-white p-1 rounded">React</span>
                <span class="border border-white p-1 rounded">Node</span>
            </div>
        </div>
    </div>
  );
}

export default Card;
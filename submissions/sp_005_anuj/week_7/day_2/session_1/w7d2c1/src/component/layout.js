import React from 'react';
import './layout.css';
import { directive } from '@babel/types';

function Layout() {
    return (
        <div class="App main">
            <button class="pro">PRO</button>
            <div class="mid_section">
                <img class="img" src="https://steemitimages.com/DQmZk3QRfDbwdKz8t6svvXNKiHqSbZMrBBMA47DxfCS5t2J/6362376457610920071306201755_stock-photo-paris-france-january-man-wearing-vendetta-mask-this-mask-is-a-well-known-symbol-for-244924321.jpg"></img>
                <h1>Ricky Park</h1>
                <h3>NEW YORK</h3>
                <p>User interface designer and <br></br> front-enddeveloper</p>
                <button class="msg_button">Message</button> <button class="following_btn">Following</button>
                <p>SKILLS</p>
                <button class="button">UI/UX</button> <button class="button">Front End Development</button> <button class="button">HTML</button><br></br>
                <button class="button">CSS </button> <button class="button">JavaScript</button> <button class="button">React</button> <button class="button">Node</button>
            </div>
        </div>
    );
}

export default Layout;
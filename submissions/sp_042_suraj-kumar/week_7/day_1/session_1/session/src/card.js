import React from 'react';
import './button.css';
function Image() {
    return (

        <div class="background">
            <div class="card">
                <button class="pro">Pro</button>
                <img class="Img" src="https://via.placeholder.com/150"></img>
                <br />

                <h1 class="name">Ricky Park</h1>
                <h3>NEW YORK</h3>

                <p> User interface designer and <br />front-end developer</p>

                <button class="message">Message</button>
                <button class="following">Following</button>

                <br />

                <div class="div2">
                    <button class="Btn">UX/UI</button>
                    <button class="Btn">Front End Developer</button>
                    <button class="Btn">HTML</button>
                    <br />
                    <button class="Btn">CSS</button>
                    <button class="Btn">JavaScript</button>
                    <button class="Btn">React</button>
                    <button class="Btn">Node</button>
                </div>
            </div>
        </div>

    );
}
export default Image;


import React from 'react';
import './a3.css';

function Button1()
{
    return(
        <div class="App">
            <div id="mainDiv">
                <div id="insideDiv">
                    <div>
                        <img id="profile" src="https://media.treehugger.com/assets/images/2017/08/Yourshot_TPOY_GRANDPRIZE-Nature_1st_Velasco.jpg" height="50%" width="50%" />
                    </div>
                    <h3 id="firstText">Ricky Park</h3>
                    <h4 id="secondText">NEW YORK</h4>
                    <p id="thirdText">Useer interface designer and front-end developer</p>
                    <button id="message">Message</button>
                    <button id="follow">Follow</button>
                </div>
                <div id="innerDiv">
                    <div id="secondDiv">
                        <p id="skills">Skills</p>
                        <p id="uiUx">UI/UX</p>
                        <p id="frontEnd">Front-end Development</p>
                        <p id="html">HTML</p>
                        <p id="css">CSS</p>
                        <p id="javascript">Javascript</p>
                        <p id="react">React</p>
                        <p id="node">Node</p>
                    </div>
                </div>,
            </div>
        </div>
    )
}
export default Button1;

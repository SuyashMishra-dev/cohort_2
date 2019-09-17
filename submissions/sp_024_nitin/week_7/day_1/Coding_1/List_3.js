import React from 'react';

function List_3() {
    return (
        <div className = 'backGround'>
            <div className = 'backGround1'>
                <p className = 'pro'>PRO</p>
                <img className = 'img' src = "https://via.placeholder.com/150"></img>
                <h3 className = 'H3'>Ricky Park</h3>
                <h5 className = 'H5'>New York</h5>
                <p className = 'p'>User interface designer and front-end developer</p>
            <div>
                <button className = 'Message'>Message</button>
                <button className = 'Following'>Following</button>
            </div>
            </div>
            <div className = 'skillsBox'>
                <h5 className = 'h5'>Skills</h5>
            </div>
            <div>
                <p className = 'UI'>UI/UX</p>
                <p className = 'Front'>Front End Developement</p>
                <p className = 'html'>HTML</p>
            </div>
            <div>
                <p className = 'Cs'>CSS</p>
                <p className = 'java'>JavaScript</p>
                <p className = 'React'>React</p>
                <p className = 'Node'>Node</p>
            </div>
        </div>
    );
}
export default List_3;
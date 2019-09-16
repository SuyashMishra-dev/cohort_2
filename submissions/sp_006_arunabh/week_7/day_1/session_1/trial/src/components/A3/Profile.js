import React from 'react';
import '../../App.css';

function Profile() {
   return (
    <div>
        <div className='Profile'>
            <p className='Pro'>PRO</p>
            <img className='Image' src="https://image.shutterstock.com/image-photo/asian-woman-smiling-dimple-long-260nw-601924238.jpg" alt="DP" width="100" height="100"/>
            <h3>Ricky Park</h3>
            <p>NEW YORK</p>
            <p>User interface designer and front-end developer</p>
            <button>Message</button>
            <button>Following</button>
            <div>
                <p>SKILLS</p>
                <p>
                    <span>UI/UX</span>
                    <span>Front End Developer</span>
                    <span>HTML</span>
                </p>
                <p>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>Node</span>
                </p>
            </div>
        </div>
    </div>
   );
}

export default Profile;
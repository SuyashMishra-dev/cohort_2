import React from 'react';

class Card extends React.Component{
    render(){
        return(
        <div>
            <div className="voiletBg">
              <div>
                  <br></br>
              </div>
              <div className="voiletDarkBg">
                 <div>
                 <img src = "https://via.placeholder.com/150" className="img" height = "130px" width = "130px" />
                 </div>
                 <div className="name">Ricky Park</div>
                 <div className="place">New York</div>
                 <p className="occupation">User interface designer and <br></br>
                 front-end developer
                 </p>
                 <div>
                 <button className="btn1Card">Message</button>
                 <button className="btn2Card">Following</button>
                 </div>
                 <div className="voiletVdarkBg">
                  <p className="lang">
                      SKILLS
                  </p>
                  <div className="flex">
                  <p className="lang">UI/UX</p>
                  <p className="lang">Front End Development</p>
                  <p className="lang">HTML</p>
                  </div>
                  <div className="flex">
                  <p className="lang">CSS</p>
                  <p className="lang">JavaScrip</p>
                  <p className="lang">React</p>
                  <p className="lang">Node</p>
                  </div>
                  
                  </div>
              </div>
             
            </div>
        </div>
        );
    }
}

export default Card
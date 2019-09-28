import React from 'react';
import ReactDOM from 'react-dom';
import Styles from './picture.module.css'

class Picture extends React.Component {
    render() {
        return (
            <div className={Styles.background}>
                <div className={Styles.innerbackground}>
                    <p className={Styles.pro}>PRO</p>
                    <img className={Styles.picture} src="https://images.pexels.com/photos/2953872/pexels-photo-2953872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
                     <br></br>
                     <h1 className="App">Ricky Park</h1>
                     <h5 className="App">NEWYORK</h5>
                     <h5 className="App">User interface designer and<br></br>front-end developer</h5>
                     <p className="botton ">Message</p>
                     <p className="botton1 ">Following</p>
                     <br></br>
                     <br></br>
                     <div className={Styles.footer}>
                         
                         
                
                          
                        
                         
                     </div>

                </div>
            </div>


        )
    }
}
export default Picture;

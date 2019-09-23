import React from 'react';
import styles from './card.module.css';

const Card = () => {
    return (
        <div className={styles.bgrnd+' '+'p-3'}>
            <div className="row">
                <div className={"col-md-3"+" "+"offset-md-4"+" "+styles.bgrnd}>
                    <div className={"card"+" "+styles.bgrnd}>
                        <img src={"https://via.placeholder.com/150"} style={{borderRadius:"50%",marginLeft:"110px"}}  width="50%" />
                        <div className="card-body text-center">
                            <h3 className="card-title">Ricky Park</h3>
                            <h5>New York</h5>
                            <p className="card-text">User Inter face Designer and front end developer</p>
                            {/* <button>Message</button><button>Following</button> */}
                            <a href="#" className="btn btn-primary">Message</a> 
                            <a href="#" className="btn btn-outline-primary ml-1">Following</a>
                            <br />
                            <br />                            
                        </div>
                        <div className="p-2">
                            <p className="text-info">Skills</p>
                            <a href="#" className="btn btn-outline-primary mb-1 ml-1">UI/UX</a> 
                            <a href="#" className="btn btn-outline-primary mb-1 ml-1">Javascript</a>
                            <a href="#" className="btn btn-outline-primary mb-1 ml-1">FrontEndDevelopment</a> 
                            <a href="#" className="btn btn-outline-primary mb-1 ml-1">HTML</a>                            
                            <a href="#" className="btn btn-outline-primary mb-1 ml-1">CSS</a> 
                            <a href="#" className="btn btn-outline-primary ml-1">React</a>
                            <a href="#" className="btn btn-outline-primary ml-1">Node</a>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default Card;
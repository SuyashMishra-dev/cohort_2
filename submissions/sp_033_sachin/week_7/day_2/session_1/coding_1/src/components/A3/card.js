import React from 'react';
import styles from '../../card.module.css';

const Card = (props) => {
    let alist = props.data.skills.map(element => {
        return (<a href="#" className="btn btn-outline-primary mb-1 ml-1">{element}</a>);
    });
    return (
        <div className={`${styles.bgrnd} p-3`}>
            <div className="row">
                <div className={`col-md-3 offset-md-4 ${styles.bgrnd}`}>
                    <div className={`card ${styles.bgrnd}`}>
                        <img src={"https://via.placeholder.com/150"} alt="Hi" style={{borderRadius:"50%",marginLeft:"110px"}}  width="50%" />
                        <div className="card-body text-center">
                            <h3 className="card-title">{props.data.name}</h3>
                            <h5>{props.data.location}</h5>
                            <p className="card-text"></p>
                            {/* <button>Message</button><button>Following</button> */}
                            <a href="#" className="btn btn-primary">Message</a> 
                            <a href="#" className="btn btn-outline-primary ml-1">Following</a>
                            <br />
                            <br />                            
                        </div>
                        <div className="p-2">
                            <p className="text-info">Skills</p>
                            {alist}                           
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default Card;
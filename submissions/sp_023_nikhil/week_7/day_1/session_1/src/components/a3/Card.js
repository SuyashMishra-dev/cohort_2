import React from 'react';
import styles from './card.module.css';

const Card = () => {
    return (
        <div>
            <div>
                <div className={styles.card1+" card mt-3"}>
                    <img src="https://via.placeholder.com/150" className="border border-info" alt="" width="20%" />
                    <div className="card-body">
                        <div className={styles.title + " card-title"}>Ricky Park</div>
                        <div className="card-subtitle mb-2"></div>
                        <div className={styles.txt+" card-text"}>User interface design and front-end developer</div>
                        <button className={styles.btn1 + " btn"}>Message</button>
                        <button className={styles.btn2 + " btn border border-info"}>Following</button>
                        <div className={styles.foot+" card-footer"}>
                            <h6>SKILLS</h6>
                            <div className={styles.fl}>
                                <div className={styles.bdr}>UI/UX</div>
                                <div className={styles.bdr}>Front End Development</div>
                                <div className={styles.bdr}>HTML</div>
                                <div className={styles.bdr}>CSS</div>
                            </div>
                            <div className={styles.fl+" mt-1"}>
                            <div className={styles.bdr}>JavaScript</div>
                            <div className={styles.bdr}>React</div>
                            <div className={styles.bdr}>Node</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
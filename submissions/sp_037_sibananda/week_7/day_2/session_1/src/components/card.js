import React from 'react'
import ReactDOM from 'react-dom'
import styles from './card.module.css'

class Card extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={styles.background}>
                <div className={styles.innerbackground}>
                    <div className={styles.pro}>PRO</div>
                    <img className={styles.picture} src="https://images.pexels.com/photos/2953872/pexels-photo-2953872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
                    <h2 style={{ "color": "white", "text-align": "center", "font-family": " 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>{this.props.Cardinfo.name}</h2>
                    <h5 style={{ "color": "white", "text-align": "center", "font-family": " 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>{this.props.Cardinfo.location}</h5>
                    <h5 style={{ "color": "white", "text-align": "center", "font-family": " 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>{this.props.Cardinfo.description}</h5>
                    <button className={styles.bottom}>Message</button>
                    <button className={styles.botton1}>Following</button>
                    <br></br>
                    <br></br>
                    <div className={styles.footer}>
                        <p>skills</p>
                        <br></br>
                        {this.props.Cardinfo.SKILLS.map((skill)=><div className={styles.small}><button className="ml-2">{skill}</button></div>)}
                    </div>
                </div>


            </div>
        )
    }
}

export default Card

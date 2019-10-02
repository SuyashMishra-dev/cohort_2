import React from 'react';
import styles from './mystyle.module.css';

class HomeHighlight extends React.Component{
    constructor(){
        super();
        this.state = {
            items: [{title: '100% ORIGINAL', description: 'Guarantee for all products at mysite.com', image: 'https://bloggingrepublic.com/wp-content/uploads/2019/08/writingiconblue-256x256-0.png'},
                    {title: 'RETURN IN 30 DAYS', description: 'You have 30 days to return if you dont like.', image: 'https://www.top5reviewed.com/wp-content/uploads/2018/11/binoculars.png'},
                    {title: 'GET FREE DELIVERY', description: 'All your orders are delivered for free.', image: 'https://www.artworkdesign.it/modulo/social_network/img/7/icoGMap.png'},]
        }
    }
    
    render(){

        let allHighlights = this.state.items.map(eachitem => 
                <div className={styles.eachhightlight}>
                    <img src={eachitem.image} width="150"/>
                    <p>{eachitem.title}</p>
                    <p>{eachitem.description}</p>
                </div>
            )
        return(
            <div className={styles.hightlight}>
                {allHighlights}
            </div>
        )
    }
}

export default HomeHighlight;
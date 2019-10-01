import React from 'react';

import { Link } from 'react-router-dom';

const MobileShowcaseCard = (props) => {
    console.log(props);
    return(
        <div className='card col m3' style={{margin: '10px 55px'}}>
            <div className='card-image'>
                <img src={props.inputData.imgLink}></img>
            </div>
            <div className='card-content'>
                <p style={{fontSize: '22px', textAlign: 'center', marginBottom: '20px', fontWeight: 'bolder'}}>{props.inputData.text}</p>
                <p style={{textAlign: 'center', marginBottom: '20px', fontWeight: 'bold'}}>{props.inputData.price}</p>
                <Link to={`${props.match.url}/${props.inputData.id}`} class="waves-effect waves-light btn blue darken-4" style={{width: '100%'}}>Know More</Link>
            </div>
        </div>
    )
}

export default MobileShowcaseCard;
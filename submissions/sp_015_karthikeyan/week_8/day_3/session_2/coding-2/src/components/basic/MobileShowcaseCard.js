import React from 'react';

const MobileShowcaseCard = (props) => {
    return(
        <div className='card col m3' style={{margin: '10px 55px'}}>
            <div className='card-image'>
                <img src={props.data.imgLink}></img>
            </div>
            <div className='card-content'>
                <p style={{fontSize: '22px', textAlign: 'center', marginBottom: '20px', fontWeight: 'bolder'}}>{props.data.text}</p>
                <p style={{textAlign: 'center', marginBottom: '20px', fontWeight: 'bold'}}>{props.data.price}</p>
                <a class="waves-effect waves-light btn blue darken-4" style={{width: '100%'}}>Buy Now</a>
            </div>
        </div>
    )
}

export default MobileShowcaseCard;
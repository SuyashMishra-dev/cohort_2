import React from 'react';

const ShowcaseCard = (props) => {
    return(
        <div className='card col m3' style={{margin: '10px 55px'}}>
            <div className='card-image'>
                <img src={props.data.imgLink}></img>
            </div>
            <div className='card-content'>
                <p style={{fontSize: '18px', textAlign: 'center', marginBottom: '20px'}}>{props.data.text}</p>
                <p>Valid from Jul 07. 2019 to Sep 30. 2019</p>
                <p style={{fontWeight: 'bolder', marginBottom: '20px'}}>Ending Soon</p>
                <a class="waves-effect waves-light btn blue darken-4">Buy Now</a>
            </div>
        </div>
    )
}

export default ShowcaseCard;
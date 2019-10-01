import React from 'react';

import { Link } from 'react-router-dom';

import Offers from './basic/Offers'

const DetailedView = props => {
    let input = props.data[0];
    return(
        <div className='container'>
            <div className='row'>
                <div className='col m5'>
                    <img src={input.imgLink}></img>
                </div>
                <div className='col m7' style={{marginTop: '20px'}}>
                    <h3>{input.text}</h3>
                    <div style={{padding: '10px'}}>
                        <h6>Summary</h6>
                        <hr></hr>
                        <div className='row'>
                            <h5 className='col m6'>Total Price</h5>
                            <h5 className='col m6' style={{textAlign: 'right'}}>{input.price}</h5>
                            <Link class="waves-effect waves-light btn blue darken-4" style={{width: '100%', borderRadius: '80px', marginTop: '50px'}}>Buy Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Offers />
        </div>
    )
}

export default DetailedView;
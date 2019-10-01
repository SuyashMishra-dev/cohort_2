import React from 'react';

const Offers = () => {
    return (
        <div className='row'>
            <div className='col m6'>
                <div className='card horizontal'>
                    <div className='card-image'>
                        <img src='https://www.samsung.com/etc/designs/smg/shopintg/imgs/promotion_icon/cashback.svg' style={{width: '100%'}}></img>
                    </div>
                    <div className='card-stacked'>
                        <div className='card-content'>
                            <h6>Get ₹3,000 cashback on Yes Bank Credit Cards.</h6>
                            <p>*T&C Apply</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='col m6'>
                <div className='card horizontal'>
                    <div className='card-image'>
                    <img src='https://www.samsung.com/etc/designs/smg/shopintg/imgs/promotion_icon/tradein.svg' style={{width: '100%'}}></img>
                    </div>
                    <div className='card-stacked'>
                        <div className='card-content'>
                            <h6>Buy with exchange and get up to 50% additional value on your old device via cashify.</h6>
                            <p>*T&C Apply</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers;
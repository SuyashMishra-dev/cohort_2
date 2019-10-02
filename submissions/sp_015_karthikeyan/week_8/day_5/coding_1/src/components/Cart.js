import React from 'react';

const Cart = () => {
    return (
        <>
        <div className='container'>
            <div className='row'>
                <div className='col m7'>
                    <h5>Cart (0 ITEM)</h5>
                    <hr></hr>
                    <p style={{textAlign: 'center'}} muted><i>No items in the cart</i></p>
                </div>
                <div className='col m3 offset-m2'>
                    <h5>ORDER SUMMARY</h5>
                    <div className='card'>
                        <div className='card-content' style={{textAlign: 'center'}}>
                            <i>Add a few items in your cart</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src='//images.samsung.com/is/image/samsung/p5/in/mobile/24-7-banner_pc.jpg?$ORIGIN_JPG$' style={{width: '100%'}}></img>
        </>
    )
}

export default Cart;
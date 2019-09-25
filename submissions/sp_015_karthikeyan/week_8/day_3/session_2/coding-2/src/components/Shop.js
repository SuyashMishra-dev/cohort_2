import React from 'react';

import ShowcaseCard from './basic/ShowcaseCard'

class Shop extends React.Component {
    constructor() {
        super();
        this.state = {
            showcaseData : [
                {
                    imgLink: 'https://images.samsung.com/is/image/samsung/p5/in/offer/offers/oyo-hhp-july9.JPG?$ORIGIN_IMG$',
                    text: 'OYO offer for Mobile'
                },
                {
                    imgLink: 'https://images.samsung.com/is/image/samsung/p5/in/offer/offers/oyo-ce-july9.JPG?$ORIGIN_IMG$',
                    text: 'OYO offer for Mobile'
                },
                {
                    imgLink: 'https://images.samsung.com/is/image/samsung/p5/in/offer/offers/offer-tile-fit.jpg?$ORIGIN_JPG$',
                    text: 'Galaxy Fit'
                },
                {
                    imgLink: 'https://images.samsung.com/is/image/samsung/p5/in/offer/offers/offer-tile-active-watch.jpg?$ORIGIN_JPG$',
                    text: 'Galaxy Watch Active'
                },
                {
                    imgLink: 'https://images.samsung.com/is/image/samsung/p5/in/offer/offers/offer-tile-fit-e.jpg?$ORIGIN_JPG$',
                    text: 'Galaxy Fit e'
                },
                {
                    imgLink: 'https://images.samsung.com/is/image/samsung/p5/in/offer/offers/offer-tile-tab-a.JPG?$ORIGIN_IMG$',
                    text: 'Galaxy Tab A 10.1'
                },
                {
                    imgLink: 'https://images.samsung.com/is/image/samsung/p5/in/offer/offers/400x400-A-series.jpg?$ORIGIN_JPG$',
                    text: 'GALAXY A SERIES'
                },
                {
                    imgLink: 'https://images.samsung.com/is/image/samsung/p5/in/offer/offers/400x400-Ref.jpg?$ORIGIN_JPG$',
                    text: 'REFRIFERATOR'
                },
                {
                    imgLink: 'https://images.samsung.com/is/image/samsung/p5/in/offer/offers/400x400-hd.jpg?$ORIGIN_JPG$',
                    text: 'TELEVISIONS'
                }
            ]
        }
    }
    render() {
        return (
            <>
            <img src='https://images.samsung.com/is/image/samsung/p5/in/offer/upsize2-1440x555-offer.jpg?$ORIGIN_JPG$' style={{width: '100%'}}></img>
            <div className='row'>
                {this.state.showcaseData.map(ele => {
                    return <ShowcaseCard data={ele} />
                })}
            </div>
            </>
        )
    }
}

export default Shop;
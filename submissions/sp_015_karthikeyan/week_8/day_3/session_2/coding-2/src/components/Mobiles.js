import React from 'react';

import MobileShowcaseCard from './basic/MobileShowcaseCard'

class Shop extends React.Component {
    constructor() {
        super();
        this.state = {
            showcaseData : [
                {
                    imgLink: '//images.samsung.com/is/image/samsung/in-galaxy-s10-sm-g973-sm-g973fzwgins-frontprismwhite-thumb-146960193?$PF_PRD_PNG$',
                    text: 'Galaxy S10',
                    price: '₹ 76,900.00'
                },
                {
                    imgLink: '//images.samsung.com/is/image/samsung/in-galaxy-a50-a505f-4gb-sm-a505fzwdins-white-thumb-158155301?$PF_PRD_PNG$',
                    text: 'Galaxy A50 (4GB RAM)',
                    price: '₹ 18,490.00'
                },
                {
                    imgLink: '//images.samsung.com/is/image/samsung/in-galaxy-m20-m205f-4gb-sm-m205fdagins-black-thumb-thumb-143690879?$PF_PRD_PNG$',
                    text: 'Galaxy M20 (4GB RAM)',
                    price: '₹ 11,990.00'
                },
                {
                    imgLink: '//images.samsung.com/is/image/samsung/in-galaxy-note9-n960-sm-n960fzkdins-frontblack-thumb-112489220?$PF_PRD_PNG$',
                    text: 'Galaxy Note9',
                    price: '₹ 67,900.00'
                },
                {
                    imgLink: '//images.samsung.com/is/image/samsung/in-galaxy-a10-a105f-sm-a105fzkgins-black-thumb-thumb-152176207?$PF_PRD_PNG$',
                    text: 'Galaxy A10 (2GB RAM)',
                    price: '₹ 7,990.00'
                },
                {
                    imgLink: '//images.samsung.com/is/image/samsung/in-galaxy-a30-a305f-sm-a305fzbfins-lightblue-thumb-thumb-152170783?$PF_PRD_PNG$',
                    text: 'Galaxy A30 (4GB RAM)',
                    price: '₹ 15,490.00'
                }
            ]
        }
    }
    render() {
        return (
            <>
            <img src='https://images.samsung.com/is/image/samsung/p5/in/home/Homepage-banner_without-copy.png?$ORIGIN_PNG$%22%20data-src-pc=%22//images.samsung.com/is/image/samsung/p5/in/home/Homepage-banner_without-copy.png?$ORIGIN_PNG$%22%20data-src-mobile=%22//images.samsung.com/is/image/samsung/p5/in/home/homepage-mobile-banner_without-copy-2.jpg?$ORIGIN_JPG$' style={{width: '100%'}}></img>
            <div className='row'>
                {this.state.showcaseData.map(ele => {
                    return <MobileShowcaseCard data={ele} />
                })}
            </div>
            </>
        )
    }
}

export default Shop;
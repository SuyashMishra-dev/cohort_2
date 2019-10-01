import React from 'react';

import MobileShowcaseCard from './basic/MobileShowcaseCard';

class Shop extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        return (
            <>
            <img src='https://images.samsung.com/is/image/samsung/p5/in/home/Homepage-banner_without-copy.png?$ORIGIN_PNG$%22%20data-src-pc=%22//images.samsung.com/is/image/samsung/p5/in/home/Homepage-banner_without-copy.png?$ORIGIN_PNG$%22%20data-src-mobile=%22//images.samsung.com/is/image/samsung/p5/in/home/homepage-mobile-banner_without-copy-2.jpg?$ORIGIN_JPG$' style={{width: '100%'}}></img>
            <div className='row'>
                {this.props.data.map(ele => {
                    console.log(ele);
                    return <MobileShowcaseCard inputData={ele} {...this.props} />
                })}
            </div>
            <img src='//images.samsung.com/is/image/samsung/p5/in/mobile/24-7-banner_pc.jpg?$ORIGIN_JPG$' style={{width: '100%'}}></img>
            </>
        )
    }
}

export default Shop;
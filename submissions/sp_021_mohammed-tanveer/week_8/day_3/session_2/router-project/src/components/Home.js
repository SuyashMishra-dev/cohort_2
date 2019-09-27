import React from 'react';
import Slider from './Slider';
import HomeArrivals from './HomeArrivals';
import HomeBanner from './HomeBanner';
import HomeHighlight from './HomeHighlight';

function Home(){
    return(
        <div>
            <Slider />
            <HomeArrivals />
            <HomeBanner />
            <HomeHighlight />
        </div>
    )
}

export default Home;
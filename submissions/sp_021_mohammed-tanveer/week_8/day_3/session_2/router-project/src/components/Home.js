import React from 'react';
import Slider from './Slider';
import HomeArrivals from './HomeArrivals';
import HomeBanner from './HomeBanner';
import HomeHighlight from './HomeHighlight';
import Footer from './Footer';

function Home(){
    return(
        <div>
            <Slider />
            <HomeArrivals />
            <HomeBanner />
            <HomeHighlight />
            <Footer />
        </div>
    )
}

export default Home;
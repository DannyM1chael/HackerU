import React from 'react';
import Info from '../../components/info/info';
import Sub from '../../components/sub/sub';
import Partners from '../../components/partners/partners';
import Category from '../../scenes/home/components/category';
import Countdown from '../../scenes/home/components/countdown';
import Feedback from '../../components/feedback';
import FeaturedProducts from './components/featured_products';
import AutoSlider from './components/slider';

function Home(props) {
    
    return(
        <React.Fragment>
            <AutoSlider />
            <Info />
            <Category />
            <FeaturedProducts />
            <Countdown />
            <Feedback />
            <Partners />
            <Sub />
        </React.Fragment>
    )
}

export default Home;
import React from 'react';
import Info from '../components/info/info';
import Sub from '../components/sub/sub';
import Partners from '../components/partners/partners';
import Category from '../../components/category';
import Countdown from '../../components/ad';
import Feedback from '../../components/feedback';
import FeaturedProducts from '../../components/products_home';
import AutoPlay from './components/slider';

function Home(props) {
    
    return(
        <React.Fragment>
            <AutoPlay />
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
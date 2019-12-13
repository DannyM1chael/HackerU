import React from 'react';
import Info from '../components/info/info';
import Sub from '../components/sub/sub';
import Partners from '../components/partners/partners';
import Category from '../../components/category';
import Products from '../../components/products';
import Ad from '../../components/ad';
import Feedback from '../../components/feedback';
import Slider from './components';

function Home(props) {
    
    return(
        <React.Fragment>
            <Slider />
            <Info />
            <Category />
            <Products />
            <Ad />
            <Feedback />
            <Partners />
            <Sub />
        </React.Fragment>
    )
}

export default Home;
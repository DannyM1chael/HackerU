import React from 'react';
import Info from '../../components/info/info';
import Sub from '../../components/sub/sub';
import Feedback from '../../components/feedback';
import BackGround from '../../components/background';
import Banner from '../../scenes/about/banner';
import Counter from './counter';

function About(props) {
    
    return(
        <React.Fragment>
            <BackGround name='About' />
            <Banner />
            <Sub />
            <Feedback />
            <Counter/>
            <Info />
        </React.Fragment>
    )
}

export default About;
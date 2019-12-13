import React from 'react';
import BackImg from '../components/assets/images/bg_1.jpg';
import Info from '../components/info/info';
import BackGround from '../components/background';

function About(props) {
    
    return(
        <React.Fragment>
            <BackGround name='About' />
            <Info />
        </React.Fragment>
    )
}

export default About;
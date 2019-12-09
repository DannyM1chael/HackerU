import React from 'react';
import Info from '../components/info/info';
import Sub from '../components/sub/sub';
import Partners from '../components/partners/partners';

function Home(props) {
    
    return(
        <React.Fragment>
            <Info />
            <Partners />
            <Sub />
        </React.Fragment>
    )
}

export default Home;
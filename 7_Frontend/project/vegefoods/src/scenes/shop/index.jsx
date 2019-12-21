import React from 'react';
import Sub from '../components/sub/sub';
import BackGround from '../components/background';
import Products from '../shop/components/shop/index';

function Shop(props) {
    
    return(
        <React.Fragment>
            <BackGround name='Products' />
            <Products />
            <Sub />
        </React.Fragment>
    )
}

export default Shop;
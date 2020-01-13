import React from 'react';
import Sub from '../../components/sub/sub';
import BackGround from '../../components/background';
import ProductsPage from './components/products';

function Shop(props) {
    
    return(
        <React.Fragment>
            <BackGround name='Products' />
            <ProductsPage />
            <Sub />
        </React.Fragment>
    )
}

export default Shop;
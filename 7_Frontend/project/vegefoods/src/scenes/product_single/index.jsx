import React from 'react';
import BackGround from '../../components/background';
import Sub from '../../components/sub/sub';
import ProductPage from './components/product_page';
import RelatedProducts from './components/related_products';

function SingleProduct(props) {
    
    return(
        <React.Fragment>
            <BackGround name='Product Single' />
            <ProductPage />
            <RelatedProducts />
            <Sub />
        </React.Fragment>
    )
}

export default SingleProduct;
import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../../../shop/components/products/product';

function FeaturedProducts(props) {

    const productData = useSelector((store) => store.app.home)

    return(
        <div className = "container">
            <div className = "row justify-content-center mb-3 pb-3">
                <div className="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
                    <span className="subheading">Featured Products</span>
                    <h2 className="mb-4">Our Products</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                </div>
                    {productData.map((product, index) => <Product key={ product.id }{...product}/>)}
            </div>
        </div>
    )
    
} 

export default FeaturedProducts;

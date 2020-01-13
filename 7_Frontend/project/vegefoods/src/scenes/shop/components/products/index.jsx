import React from 'react';
import ProductCategory from './product_category';
import Product from './product';
import { useSelector } from 'react-redux';

function ProductsPage(props) {

    const productData = useSelector((store) => store.app.shop)

    return(
        <section className="ftco-section">
            <ProductCategory />
            <div className = "container">
                <div className = "row">
                    {productData.map((product, index) => <Product key={ product.id }{...product}/>)}
                </div>
            </div>
        </section>
    )
    
} 

export default ProductsPage;
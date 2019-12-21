import React from 'react';
import ProductCategory from '../shop/product_category';
import { Link } from 'react-router-dom';

function Products(props) {
    
    return(
        <section className="ftco-section">
            <ProductCategory />
            <div className = "container">
            </div>
        </section>
    )
} 

export default Products;
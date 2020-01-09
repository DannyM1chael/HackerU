import React from 'react';
import ProductCategory from '../shop/product_category';
import Product from './product';
import dataProducts from '../../../../components/api/dataProducts'

function Products(props) {
    
    return(
        <section className="ftco-section">
            <ProductCategory />
            <div className = "container">
                <div className = "row">
                        { dataProducts.map((index, id, category, title, description, price, image) =>{
                            return(
                                <Product key={ id } title={ title } price={ price } image={ image }/>
                            )
                        })}
                </div>
            </div>
        </section>
    )
} 

export default Products;
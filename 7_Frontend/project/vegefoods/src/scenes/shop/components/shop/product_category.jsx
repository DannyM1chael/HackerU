import React from 'react';
import { Link } from 'react-router-dom';


function ProductCategory(props) {
    
    return(
        <div className="row justify-content-center">
            <div className="col-md-10 mb-5 text-center">
                <ul className="product-category">
                    <li><Link to="#" className = "active">All</Link></li>
                    <li><Link to="#">Vegetables</Link></li>
                    <li><Link to="#">Fruits</Link></li>
                    <li><Link to="#">Juice</Link></li>
                    <li><Link to="#">Dried</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default ProductCategory;
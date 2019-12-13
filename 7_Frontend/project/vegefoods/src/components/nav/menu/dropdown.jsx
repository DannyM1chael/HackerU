import React from 'react';
import * as URL from '../../../router/url';

function Dropdown(props) {
    
    return(

        <div className="dropdown-menu" aria-labelledby="dropdown04">
            <Link to={ URL.SHOP } className="dropdown-item">Shop</Link>
            <Link to={ URL.WISHLIST} className="dropdown-item">Wishlist</Link>
            <Link to={ URL.PRODUCT_SINGLE } className="dropdown-item">Single Product</Link>
            <Link to={ URL.SHOP_CART } className="dropdown-item">Cart</Link>
            <Link to={ URL.CHECKOUT } className="dropdown-item">Checkout</Link>
        </div>
    )
}

export default Dropdown;
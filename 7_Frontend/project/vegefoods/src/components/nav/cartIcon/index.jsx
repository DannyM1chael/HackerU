import React from 'react';
import { Link } from 'react-router-dom';
import * as URL from '../../../router/url';

function CartIcon(props) {
    
    return(
        <li className="nav-item cta cta-colored">
            <Link to={ URL.CART } className="nav-link">
                <span className="icon-shopping_cart"></span>[0]
            </Link>
        </li>
    )
}

export default CartIcon;
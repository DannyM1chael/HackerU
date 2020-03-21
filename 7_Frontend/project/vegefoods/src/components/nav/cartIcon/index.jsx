import React from 'react';
import { Link } from 'react-router-dom';
import * as URL from '../../../router/url';
import { useSelector } from 'react-redux';

function CartIcon(props) {

    const CartTotal = useSelector(store => store.app.total);

    return(
        <li className="nav-item cta cta-colored">
            <Link to={ URL.CART } className="nav-link">
                <span className="icon-shopping_cart"></span>
                    [{ CartTotal }]
            </Link>
        </li>
    )
}

export default CartIcon;
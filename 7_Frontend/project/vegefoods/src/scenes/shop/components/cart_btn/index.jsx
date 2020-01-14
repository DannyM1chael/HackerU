import React from 'react';
import { Link } from 'react-router-dom';
import * as URL from '../../../../router/url';
import { addToCart } from '../../../../store/actions';
import { useDispatch } from 'react-redux';

function CartButton(props) {

    const dispatch = useDispatch();

    return(
        <div className="bottom-area d-flex px-3">
            <div className="m-auto d-flex">
                <Link to={ URL.PRODUCT_SINGLE} className="add-to-cart d-flex justify-content-center align-items-center text-center">
                    <span><i className="ion-ios-menu"></i></span>
                </Link>
                <Link to='#' onClick={() => dispatch(addToCart)} className="buy-now d-flex justify-content-center align-items-center mx-1">
                    <span><i className="ion-ios-cart"></i></span>
                </Link>
            </div>
        </div>
    )
}

export default CartButton;
import React from 'react';
import { Link } from 'react-router-dom';

function CartButton(props) {

    return(
        <div className="bottom-area d-flex px-3">
            <div className="m-auto d-flex">
                <Link to="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                    <span><i className="ion-ios-menu"></i></span>
                </Link>
                <Link to="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                    <span><i className="ion-ios-cart"></i></span>
                </Link>
            </div>
        </div>
    )
}

export default CartButton;
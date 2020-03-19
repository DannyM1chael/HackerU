import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as URL from '../../../router/url';

function Total(props) {

    const cartData = useSelector((store) => store.app.cart);
    const [subTotal, setSubTotal] = useState(0);

    useEffect(() => {
        let subTotal = cartData.reduce((sum, product) => sum + product.price * product.quantity, 0);
        setSubTotal(subTotal);
    }, [cartData]);

    return(
        <div className="col-lg-4 mt-5 cart-wrap ftco-animate fadeInUp ftco-animated">
            <div className="cart-total mb-3">
                <h3>Cart Totals</h3>
                <p className="d-flex">
                    <span>Subtotal</span>
                    <span>${ subTotal.toFixed(2) }</span>
                </p>
                <p className="d-flex">
                    <span>Delivery</span>
                    <span>$0.00</span>
                </p>
                <p className="d-flex">
                    <span>Discount</span>
                    <span>${ (subTotal * 0.10).toFixed(2) }</span>
                </p>
                <p className="d-flex total-price">
                    <span>Total</span>
                    <span>${ (subTotal * 0.90).toFixed(2) }</span>
                </p>
            </div>
            <p><Link to= { URL.CHECKOUT } className="btn btn-primary py-3 px-4">Proceed to Checkout</Link></p>
        </div>
    )
}

export default Total;
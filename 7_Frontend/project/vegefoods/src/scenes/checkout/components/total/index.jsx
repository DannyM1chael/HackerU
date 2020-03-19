import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function TotalCheckout(props) {

    const cartData = useSelector((store) => store.app.cart);
    const [subTotal, setSubTotal] = useState(0);

    useEffect(() => {
        let subTotal = cartData.reduce((sum, product) => sum + product.price * product.quantity, 0);
        setSubTotal(subTotal);
    }, [cartData]);

    return(
        <div className="col-md-12 d-flex mb-5">
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
        </div>
    )
}

export default TotalCheckout;
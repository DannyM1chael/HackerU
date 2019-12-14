import React from 'react';
import { useSelector } from 'react-redux';

function Total(props) {

    const cartData = useSelector((store) => store.app.cart);
    let summ = 0;
    let cnt = 0;
    let discount;
    let summTotal;
    let summFix;
	cartData.forEach( item => {
		summ += item.price * item.cnt;
        cnt += item.cnt;
        summFix = (summ).toFixed(2);
        discount = (summ * 0.15).toFixed(2);
        summTotal = (summ - discount).toFixed(2);
        
	});
    
    return(
        <div className="col-lg-4 mt-5 cart-wrap ftco-animate fadeInUp ftco-animated">
            <div className="cart-total mb-3">
                <h3>Cart Totals</h3>
                <p className="d-flex">
                    <span>Subtotal</span>
                    <span>${ summFix }</span>
                </p>
                <p className="d-flex">
                    <span>Delivery</span>
                    <span>$0.00</span>
                </p>
                <p className="d-flex">
                    <span>Discount</span>
                    <span>${ discount }</span>
                </p>
                <p className="d-flex total-price">
                    <span>Total</span>
                    <span>${ summTotal }</span>
                </p>
            </div>
            <p><a href="checkout.html" className="btn btn-primary py-3 px-4">Proceed to Checkout</a></p>
        </div>
    )
}

export default Total;
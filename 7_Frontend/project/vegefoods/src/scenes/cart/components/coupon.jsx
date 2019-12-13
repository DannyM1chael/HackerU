import React from 'react';

function Coupon(props) {
    
    return(
        <div className="col-lg-4 mt-5 cart-wrap ftco-animate fadeInUp ftco-animated">
            <div className="cart-total mb-3">
                <h3>Coupon Code</h3>
                <p>Enter your coupon code if you have one</p>
                <form action="#" className="info">
                    <div className="form-group">
                        <label for="">Coupon code</label>
                        <input type="text" className="form-control text-left px-3" placeholder="" />
                    </div>
                </form>
            </div>
            <p><a href="checkout.html" className="btn btn-primary py-3 px-4">Apply Coupon</a></p>
        </div>
    )
}

export default Coupon;
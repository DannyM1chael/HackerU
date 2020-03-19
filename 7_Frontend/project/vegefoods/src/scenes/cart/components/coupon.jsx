import React from 'react';
import { Link } from 'react-router-dom';

function Coupon(props) {
    
    return(
        <div className="col-lg-4 mt-5 cart-wrap">
            <div className="cart-total mb-3">
                <h3>Coupon Code</h3>
                <p>Enter your coupon code if you have one</p>
                <form action="#" className="info">
                    <div className="form-group">
                        <input type="text" className="form-control text-left px-3" placeholder="" />
                    </div>
                </form>
            </div>
            <p><Link to="#" className="btn btn-primary py-3 px-4">Apply Coupon</Link></p>
        </div>
    )
}

export default Coupon;
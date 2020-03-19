import React from 'react';
import Sub from '../../components/sub/sub';
import BackGround from '../../components/background';
import CartTable from './components/table';
import Coupon from './components/coupon';
import Taxes from './components/taxes';
import Total from './components/total';
import { useSelector } from 'react-redux';


function Cart(props) {

	const cartData = useSelector((store) => store.app.cart);
    
    return(
        <React.Fragment>
            <BackGround name='Cart' />
            <section className="ftco-section ftco-cart">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ftco-animate fadeInUp ftco-animated">
                            <div className="cart-list">
                                <CartTable data={ cartData }/>
                            </div>
                        </div>
                    </div>
					<div className="row justify-content-end">
						<Coupon />
						<Taxes />
						<Total />
					</div>
                </div>
            </section>
            <Sub />
        </React.Fragment>
    )
}

export default Cart;
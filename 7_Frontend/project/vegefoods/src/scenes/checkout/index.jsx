import React from 'react';
import BackGround from '../../components/background';
import Sub from '../../components/sub/sub';
import Payment from './components/payment_form';
import TotalCheckout from './components/total';
import BillingForm from './components/billing_form';

function Checkout(props) {
    
    return(
        <React.Fragment>
            <BackGround name='Checkout' />
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <BillingForm />
                        <div className="col-xl-5">
                            <div className="row mt-5 pt-3">
                                <TotalCheckout />
                                <Payment />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Sub />
        </React.Fragment>
    )
}

export default Checkout;
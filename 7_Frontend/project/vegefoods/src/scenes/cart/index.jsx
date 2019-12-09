import React from 'react';
import BackImg from '../components/assets/images/bg_1.jpg';
import Sub from '../components/sub/sub';

function Cart(props) {
    
    return(
        <React.Fragment>
            <div className="hero-wrap hero-bread" style={{backgroundImage: `url(${BackImg})`}}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
                            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Cart</span></p>
                            <h1 className="mb-0 bread">My Cart</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Sub />
        </React.Fragment>
    )
}

export default Cart;
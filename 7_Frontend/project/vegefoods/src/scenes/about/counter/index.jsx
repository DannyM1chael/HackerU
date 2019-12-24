import React from 'react';
import AdImg from '../../components/assets/images/bg_3.jpg';

function Counter(props) {
    
    return(
        <section className="ftco-section ftco-counter img" id="section-counter" style={{backgroundImage: `url(${AdImg})`}}>
            <div className="container">
                <div className="row justify-content-center py-5">
                    <div className="col-md-10">
                        <div className="row">
                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                        <div className="block-18 text-center">
                            <div className="text">
                                <strong className="number" data-number="10000">10,000</strong>
                                <span>Happy Customers</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                        <div className="block-18 text-center">
                            <div className="text">
                                <strong className="number" data-number="100">100</strong>
                                <span>Branches</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                        <div className="block-18 text-center">
                            <div className="text">
                                <strong className="number" data-number="1000">1,000</strong>
                                <span>Partner</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                        <div className="block-18 text-center">
                            <div className="text">
                                <strong className="number" data-number="100">100</strong>
                                <span>Awards</span>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
    	    </div>
        </section>
    )
}

export default Counter;
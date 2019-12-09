import React from 'react';
import Partner1 from '../assets/images/partner-1.png';
import Partner2 from '../assets/images/partner-2.png';
import Partner3 from '../assets/images/partner-3.png';
import Partner4 from '../assets/images/partner-4.png';
import Partner5 from '../assets/images/partner-5.png';

function Partners(props) {
    
    return(
        <section className="ftco-section ftco-partner">
            <div className="container">
                <div className="row">
                    <div className="col-sm ftco-animate fadeInUp ftco-animated">
                        <a href="#" className="partner"><img src={Partner1} className="img-fluid" alt="Colorlib Template" /></a>
                    </div>
                    <div className="col-sm ftco-animate fadeInUp ftco-animated">
                        <a href="#" className="partner"><img src={Partner2} className="img-fluid" alt="Colorlib Template" /></a>
                    </div>
                    <div className="col-sm ftco-animate fadeInUp ftco-animated">
                        <a href="#" className="partner"><img src={Partner3} className="img-fluid" alt="Colorlib Template" /></a>
                    </div>
                    <div className="col-sm ftco-animate fadeInUp ftco-animated">
                        <a href="#" className="partner"><img src={Partner4} className="img-fluid" alt="Colorlib Template" /></a>
                    </div>
                    <div className="col-sm ftco-animate fadeInUp ftco-animated">
                        <a href="#" className="partner"><img src={Partner5} className="img-fluid" alt="Colorlib Template" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners;
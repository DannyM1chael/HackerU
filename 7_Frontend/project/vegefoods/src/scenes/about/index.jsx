import React from 'react';
import BackImg from '../components/assets/images/bg_1.jpg';
import Info from '../components/info/info';

function About(props) {
    
    return(
        <React.Fragment>
            <div className="hero-wrap hero-bread" style={{backgroundImage: `url(${BackImg})`}}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
                            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>About us</span></p>
                            <h1 className="mb-0 bread">About us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Info />
        </React.Fragment>
    )
}

export default About;
import React, { Component } from 'react';
import * as URL from '../../../../router/url';
import { Link } from 'react-router-dom';
import BackImg1 from '../../../../components/assets/images/bg_1.jpg';
import BackImg2 from '../../../../components/assets/images/bg_2.jpg';

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
    };
    return(
        <section id="home-section" className="hero">
                <div className="home-slider owl-carousel">
                    <div className="slider-item" style={{backgroundImage: `url(${BackImg1})`}}>  
                        <div className="overlay"></div>
                        <div className='container'>
                            <div className="row slider-text justify-content-center align-items-center">
                                <div className="col-md-12 text-center">
                                    <h1 className="mb-2">We serve Fresh Vegestables &amp; Fruits</h1>
                                    <h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
                                    <p><Link to={ URL.SHOP } className="btn btn-primary">View Details</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-slider owl-carousel">
                    <div className="slider-item" style={{backgroundImage: `url(${BackImg2})`}}> 
                        <div className="overlay"></div>
                        <div className='container'>
                            <div className="row slider-text justify-content-center align-items-center">
                                <div className="col-sm-12 text-center">
                                    <h1 className="mb-2">100% Fresh &amp; Organic Foods</h1>
                                    <h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
                                    <p><Link to={ URL.SHOP } className="btn btn-primary">View Details</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        )
    }
}

import React, { Component } from 'react';
import Slider from 'react-slick';
import BackImg1 from '../../../scenes/components/assets/images/bg_1.jpg';
import BackImg2 from '../../../scenes/components/assets/images/bg_2.jpg';

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
            <Slider {...settings}>
                <div class="home-slider owl-carousel">
                    <div className="slider-item" style={{backgroundImage: `url(${BackImg1})`}}>  
                        <div className="overlay"></div>
                        <div className='container'>
                            <div className="row slider-text justify-content-center align-items-center">
                                <div className="col-md-12 text-center">
                                    <h1 className="mb-2">We serve Fresh Vegestables &amp; Fruits</h1>
                                    <h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
                                    <p><a href="#" className="btn btn-primary">View Details</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="home-slider owl-carousel">
                    <div className="slider-item" style={{backgroundImage: `url(${BackImg2})`}}> 
                        <div className="overlay"></div>
                        <div className='container'>
                            <div className="row slider-text justify-content-center align-items-center">
                                <div className="col-sm-12 text-center">
                                    <h1 className="mb-2">100% Fresh &amp; Organic Foods</h1>
                                    <h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
                                    <p><a href="#" className="btn btn-primary">View Details</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
        )
    }
}

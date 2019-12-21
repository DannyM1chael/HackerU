import React, { Component } from 'react';
import Slider from 'react-slick';

export default class MultipleItems extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
      return(
        <Slider {...settings}>
            <div class="carousel-testimony owl-carousel">
                <div class="item">
                    <div className="testimony-wrap p-4 pb-5">
                        <div className="user-img mb-5">
                            <span className="quote d-flex align-items-center justify-content-center">
                                <i className="icon-quote-left"></i>
                            </span>
                        </div>
                        <div className="text text-center">
                            <p className="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <p className="name">Garreth Smith</p>
                            <span className="position">Marketing Manager</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-testimony owl-carousel">
                <div class="item">
                    <div className="testimony-wrap p-4 pb-5">
                        <div className="user-img mb-5">
                            <span className="quote d-flex align-items-center justify-content-center">
                                <i className="icon-quote-left"></i>
                            </span>
                        </div>
                        <div className="text text-center">
                            <p className="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <p className="name">Garreth Smith</p>
                            <span className="position">Marketing Manager</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-testimony owl-carousel">
                <div class="item">
                    <div className="testimony-wrap p-4 pb-5">
                        <div className="user-img mb-5">
                            <span className="quote d-flex align-items-center justify-content-center">
                                <i className="icon-quote-left"></i>
                            </span>
                        </div>
                        <div className="text text-center">
                            <p className="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <p className="name">Garreth Smith</p>
                            <span className="position">Marketing Manager</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-testimony owl-carousel">
                <div class="item">
                    <div className="testimony-wrap p-4 pb-5">
                        <div className="user-img mb-5">
                            <span className="quote d-flex align-items-center justify-content-center">
                                <i className="icon-quote-left"></i>
                            </span>
                        </div>
                        <div className="text text-center">
                            <p className="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <p className="name">Garreth Smith</p>
                            <span className="position">Marketing Manager</span>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
      )
    }
}

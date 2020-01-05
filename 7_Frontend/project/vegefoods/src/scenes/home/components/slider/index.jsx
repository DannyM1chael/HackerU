import React, { useState, useEffect } from 'react';
import * as URL from '../../../../router/url';
import Slider from "react-slick";
import SlideButton from './slide_button';
import Slide from './slide';
import BackImg1 from '../../../../components/assets/images/bg_1.jpg';
import BackImg2 from '../../../../components/assets/images/bg_2.jpg';


const AutoSlider = props => {
    const [activeSlide, setActiveSlide] = useState(0);
    const slides = [
        <Slide image={ BackImg1 } index={ 0 } isActive={ activeSlide }>
            <SlideButton headtitle='We serve Fresh Vegestables &amp; Fruits'
                         subtitle='We deliver organic vegetables &amp; fruits'
                         to={ URL.SHOP }
                         title='View Details'/>
        </Slide>,

        <Slide image={ BackImg2 } index={ 1 } isActive={ activeSlide }>
            <SlideButton headtitle='100% Fresh &amp; Organic Foods'
                         subtitle='We deliver organic vegetables &amp; fruits'
                         to={ URL.SHOP }
                         title='View Details'/>
        </Slide>
        ];

        useEffect(() => {
            let timer = setTimeout(()=>{
                setActiveSlide(activeSlide+1 < slides.length ? activeSlide+1 : 0);
            }, 3000)
            return () => {
                clearInterval(timer);
            };
        }, [activeSlide])

        const settings = {
            infinite: true,
            fade: true,
            arrows: false,
            autoplay: true,
            pauseOnHover: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          };

        function renderSlide(index) {
        return slides[index];
        };

        return(
            <section id="home-section" className="hero">
                <Slider {...settings}>
                    { renderSlide(activeSlide) }
                </Slider>
            </section>
        );
}

export default AutoSlider;

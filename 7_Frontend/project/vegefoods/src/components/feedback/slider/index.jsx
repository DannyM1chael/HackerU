import React from 'react';
import Slider from 'react-slick';
import SlideClient from '../slide_client';
import { useSelector } from 'react-redux';

const FeedbackSlider = props => {

    const clientData = useSelector((store) => store.app.feedback);

    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true
    };

    return(
        <Slider {...settings} style={{margin: '0 10%'}}>
                { clientData.map((client, index) => <SlideClient key={ client.id } { ...client }/>)}
        </Slider>
      );
}

export default FeedbackSlider;

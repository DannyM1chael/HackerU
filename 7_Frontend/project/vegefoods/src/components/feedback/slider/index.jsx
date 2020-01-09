import React from 'react';
import Slider from 'react-slick';
import dataClients from '../clients';
import SlideClient from '../slide_client';

const FeedbackSlider = props => {

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
                { dataClients.map((index, id, image, text, clientName, position) =>{
                    return(
                        <SlideClient key={ id } 
                                     image={ image } 
                                     text={ text } 
                                     clientName={ clientName }
                                     position={ position }/>
                    )
                })}
        </Slider>
      );
}

export default FeedbackSlider;

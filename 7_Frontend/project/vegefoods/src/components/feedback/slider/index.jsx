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
        <Slider {...settings}>
            <SlideClient 
                image={ dataClients[0].image } 
                text={ dataClients[0].text } 
                clientName={ dataClients[0].clientName } 
                position={ dataClients[0].position }/>
            <SlideClient 
                image={ dataClients[1].image} 
                text={ dataClients[1].text } 
                clientName={ dataClients[1].clientName } 
                position={ dataClients[1].position }/>
            <SlideClient 
                image={ dataClients[2].image} 
                text={ dataClients[2].text } 
                clientName={ dataClients[2].clientName } 
                position={ dataClients[2].position }/>
            <SlideClient 
                image={ dataClients[3].image} 
                text={ dataClients[3].text } 
                clientName={ dataClients[3].clientName } 
                position={ dataClients[3].position }/>
            <SlideClient 
                image={ dataClients[4].image} 
                text={ dataClients[4].text } 
                clientName={ dataClients[4].clientName } 
                position={ dataClients[4].position }/>
        </Slider>
      );
}

export default FeedbackSlider;

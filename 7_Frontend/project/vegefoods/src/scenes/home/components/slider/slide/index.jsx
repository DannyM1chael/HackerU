import React from 'react';

const Slide = props => {
    const {
        image,
        index,
        isActive
    } = props;

    return(
        <div className="home-slider owl-carousel owl-loaded owl-drag">
            <div className="slider-item" style={{backgroundImage: `url(${ image })`, width: '100%'}}>  
                <div className="overlay"></div>
                    {props.children}
            </div>
        </div>
    );
}
export default Slide;
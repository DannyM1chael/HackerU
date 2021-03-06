import React from 'react';
import BackImg from '../assets/images/bg_1.jpg';

function BackGround(props) {

    return(
        <div className="hero-wrap hero-bread" style={{backgroundImage: `url(${BackImg})`}}>
            <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
                        <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>{ props.name }</span></p>
                        <h1 className="mb-0 bread">{ props.name }</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackGround;
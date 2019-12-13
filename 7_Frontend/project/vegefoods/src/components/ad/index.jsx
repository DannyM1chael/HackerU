import React from 'react';
import BackAdImg from '../../scenes/components/assets/images/bg_3.jpg';

function Ad(props) {
    
    return(
        <section className="ftco-section img" style={{backgroundImage: `url(${ BackAdImg })`}}>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-md-6 heading-section ftco-animate deal-of-the-day ftco-animate fadeInUp ftco-animated">
                        <span className="subheading">Best Price For You</span>
                        <h2 className="mb-4">Deal of the day</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        <h3><a href="#">Spinach</a></h3>
                        <span className="price">$10 <a href="#">now $5 only</a></span>
                        <div id="timer" className="d-flex mt-5">
                            <div className="time" id="days">7<span>Days</span></div>
                            <div className="time pl-3" id="hours">19<span>Hours</span></div>
                            <div className="time pl-3" id="minutes">00<span>Minutes</span></div>
                            <div className="time pl-3" id="seconds">10<span>Seconds</span></div>
                        </div>
                    </div>
                </div>   		
            </div>
        </section>
    )
}
export default Ad;
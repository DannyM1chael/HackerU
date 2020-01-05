import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackAdImg from '../../../../components/assets/images/bg_3.jpg';

const Countdown = () => {

const calculateTimeleft = () => {
    const difference = +new Date('2021-01-01') - +new Date();
    let timeLeft = {};

    if (difference > 0 ) {
        timeLeft = {
            days: Math.floor(difference / (1000*60*60*24)),
            hours: Math.floor((difference / (1000*60*60)) %24),
            minutes: Math.floor((difference / (1000*60)) %60),
            seconds: Math.floor ((difference / 1000) %60)
        };
    }
    return timeLeft;
};

const [timeLeft, setTimeLeft] = useState(calculateTimeleft());

useEffect(() => {
    setTimeout(() => {
        setTimeLeft(calculateTimeleft());
    }, 1000);
});

const timerComponents = [];

Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
        return;
    }
    timerComponents.push(
        timeLeft[interval]
    );
});

return(
        <section className="ftco-section img" style={{backgroundImage: `url(${ BackAdImg })`}}>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-md-6 heading-section ftco-animate deal-of-the-day ftco-animate fadeInUp ftco-animated">
                        <span className="subheading">Best Price For You</span>
                        <h2 className="mb-4">Deal of the day</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        <h3><Link to="#">Spinach</Link></h3>
                        <span className="price">$10 <Link to="#">now $5 only</Link></span>
                        <div id="timer" className="d-flex mt-5">
                            <div className="time" id="days">{ timerComponents[0] }<span>Days</span></div>
                            <div className="time pl-3" id="hours">{ timerComponents[1] }<span>Hours</span></div>
                            <div className="time pl-3" id="minutes">{ timerComponents[2] }<span>Minutes</span></div>
                            <div className="time pl-3" id="seconds">{ timerComponents[3] }<span>Seconds</span></div>
                        </div>
                    </div>
                </div>   		
            </div>
        </section>
    );
}

export default Countdown;

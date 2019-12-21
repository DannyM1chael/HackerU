import React, { Component } from 'react';
import MultipleItems from '../feedback/slider';

function Feedback(prop) {
    
    return(
        <section className="ftco-section testimony-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section ftco-animate text-center fadeInUp ftco-animated">
                        <span className="subheading">Testimony</span>
                        <h2 className="mb-4">Our satisfied customer says</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                    </div>
                </div>
            </div>
            <MultipleItems />
        </section>
    )
}

export default Feedback;
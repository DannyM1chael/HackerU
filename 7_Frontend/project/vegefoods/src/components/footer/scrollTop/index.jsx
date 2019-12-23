import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

export default class ScrollTop extends Component{

    scrollToTop() {
    scroll.scrollToTop();
    };

    render() {
        return (
            <div className="mouse">
                <Link onClick={this.scrollToTop} className="mouse-icon">
                    <div className="mouse-wheel"><span className="ion-ios-arrow-up"></span></div>
                </Link>
            </div>
        );
    }
}

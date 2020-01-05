import React from 'react';
import { Link } from 'react-router-dom';

const SlideButton = props => {
    const {
        headtitle,
        subtitle,
        to,
        title
    } = props;

    return(
        <div className='container'>
            <div className="row slider-text justify-content-center align-items-center">
                <div className="col-md-12 text-center">
                    <h1 className="mb-2">{ headtitle }</h1>
                    <h2 className="subheading mb-4"> { subtitle }</h2>
                    <p><Link to={ to } className="btn btn-primary"> { title }</Link></p>
                </div>
            </div>
        </div>
    );
}

export default SlideButton;
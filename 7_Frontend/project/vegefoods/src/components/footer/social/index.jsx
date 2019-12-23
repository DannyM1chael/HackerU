import React from 'react';
import { Link } from 'react-router-dom';

function Social(props) {
    
    return(
        <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
            <li className="ftco-animate fadeInUp ftco-animated"><Link to="#"><span className="icon-twitter"></span></Link></li>
            <li className="ftco-animate fadeInUp ftco-animated"><Link to="#"><span className="icon-facebook"></span></Link></li>
            <li className="ftco-animate fadeInUp ftco-animated"><Link to="#"><span className="icon-instagram"></span></Link></li>
        </ul>
    )
}

export default Social;

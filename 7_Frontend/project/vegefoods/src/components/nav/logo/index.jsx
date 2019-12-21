import React from 'react';
import { Link } from 'react-router-dom';
import * as URL from '../../../router/url';

function Logo(props) {

    return(
        <Link to={ URL.HOME } className="navbar-brand">Vegefoods</Link>
    )
}

export default Logo;
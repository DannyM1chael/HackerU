import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import * as URL from '../../router/url';

function Navigation(props) {

	const { NAVIGATION } = URL;
	const renderItem = (item, index) => {
		return (
			<li
				key={ index }
				className={ props.location.pathname === item.url ? "active" : null }
			>
				<Link to={ item.url }>{ item.title }</Link>
			</li>);
	};
    
    return(
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	      <Link to={ URL.HOME } className="navbar-brand">Vegefoods</Link>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	          <li className="nav-item active"><Link to={ URL.HOME } className="nav-link">Home</Link></li>
			  <li className="nav-item dropdown">
              	<Link to={ URL.SHOP } className="nav-link dropdown-toggle" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</Link>
			  </li>
			  <li className="nav-item"><Link to={ URL.ABOUT } className="nav-link">About</Link></li>
	          <li className="nav-item"><Link to={ URL.BLOG } className="nav-link">Blog</Link></li>
	          <li className="nav-item"><Link to={ URL.CONTACT }className="nav-link">Contact</Link></li>
	          <li className="nav-item cta cta-colored"><Link to={ URL.CART } className="nav-link"><span className="icon-shopping_cart"></span>[0]</Link></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
    )
}

export default Navigation;
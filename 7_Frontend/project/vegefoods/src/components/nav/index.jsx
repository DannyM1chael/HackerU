import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import * as URL from '../../router/url';
import Logo from './logo';
import CartIcon from './cartIcon';
import ToggleMenu from './toggle_menu';

const Navigation = (props) => {

	const [isScroll, setIsScroll] = useState(false);
	const handleScroll = () => {
		setIsScroll(window.scrollY > 130);
	}

	useEffect(() => {
			window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll',() => handleScroll)
		};
	}, []);
	
	const { NAVIGATION } = URL;
	const renderItem = (item, index) => {
		return (
			<li className="nav-item"
				key={ index }>
				<Link to={ item.url } className="nav-link">{ item.title }</Link>
			</li>);
	};
    
    return(
			<nav id="ftco-navbar" 
				 className= { isScroll? "navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light-scrolled sleep awake" :
				 						"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"}>
				<div className="container">
					<Logo />
					<ToggleMenu />
					<div className="collapse navbar-collapse" id="ftco-nav">
						<ul className="navbar-nav ml-auto">
							{
								NAVIGATION.map(renderItem)
							}
							<CartIcon />
						</ul>
					</div>
				</div>
			</nav>
    )
}

export default withRouter(Navigation);
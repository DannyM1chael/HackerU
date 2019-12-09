import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as URL from './url';
import Home from '../scenes/home';
// import Shop from '../scenes/shop';
// import About from '../scenes/about';
// import Blog from '../scenes/blog';
// import Contact from '../scenes/contact';
// import Cart from '../scenes/cart';

const Shop = lazy(() => import('../scenes/shop'));
const About = lazy(() => import('../scenes/about'));
const Blog = lazy(() => import('../scenes/blog'));
const Contact = lazy(() => import('../scenes/contact'));
const Cart = lazy(() => import('../scenes/cart'));


export default (
    <Switch>
        <Route exact path = '/' component={ Home } />
        <Route exact path = { URL.SHOP } component={ Shop } />
        <Route exact path = { URL.ABOUT } component={ About } />
        <Route exact path = { URL.BLOG } component={ Blog } />
        <Route exact path = { URL.CONTACT } component={ Contact } />
        <Route exact path = { URL.CART } component={ Cart } />
    </Switch>
)
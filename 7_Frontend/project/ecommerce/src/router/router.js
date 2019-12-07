import React, {lazy} from 'react';
import {Switch, Route} from 'react-router-dom';
import * as URL from './url';
import Home from '../components/scenes/home';
//import Shop from '../components/scenes/shop';
//import Cart from '../components/scenes/cart';

const Shop = lazy(() => import('../components/scenes/shop'));
const Cart = lazy(() => import('../components/scenes/cart'));

export default Switch (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path={URL.SHOP} component={Shop} />
        <Route exact path={URL.CART} component={Cart} />
    </Switch>
)
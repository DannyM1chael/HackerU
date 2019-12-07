import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as URL from './url';

import Home from '../scenes/home';
// import TaskForm from '../scenes/main';
// import TaskDnd from '../scenes/deals';
// import Page404 from '../scenes/error';

const TaskForm = lazy(() => import('../scenes/main'));
const TaskDeals = lazy(() => import('../scenes/deals'));
const Page404 = lazy(() => import('../scenes/error'));


export default (
	<Switch>
		<Route exact path={ URL.URL_HOME } component={ Home } />
		<Route exact path={ URL.URL_TASK_FORM } component={ TaskForm } />
		<Route exact path={ URL.URL_TASK_DEALS } component={ TaskDeals } />
		<Route component={ Page404 } />
	</Switch>);



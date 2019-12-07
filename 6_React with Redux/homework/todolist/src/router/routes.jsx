import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as URL from './url';

import Home from '../scenes/home';
// import TaskForm from '../scenes/main';
// import TaskDnd from '../scenes/deals';
// import Page404 from '../scenes/error';
// import TasksViewOne from '../scenes/one_task';

const TaskForm = lazy(() => import('../scenes/main'));
const TaskDeals = lazy(() => import('../scenes/deals'));
const TasksViewOne = lazy(() => import('../scenes/one_task_hooks'));
const Page404 = lazy(() => import('../scenes/error'));


export default (
	<Switch>
		<Route exact path={ URL.URL_HOME } component={ Home } />
		<Route exact path={ URL.URL_TASK_FORM } component={ TaskForm } />
		<Route exact path={ URL.URL_TASK_DEALS } component={ TaskDeals } />
		<Route exact path={ URL.URL_TASK_VIEW_ONE } component={ TasksViewOne } />
		<Route component={ Page404 } />
	</Switch>);



import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { assignAll } from 'redux-act';
import * as actions from './actions';
import createRootReducer from './reducers/reducer';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();
export const middlewares = [ thunk, routerMiddleware(history) ];

// const OldConfigureStore = createStore(rootReducer);

export default function configureStore(preloadedState) {
	const store = createStore(
		createRootReducer(history),
		preloadedState,
		compose(
			applyMiddleware(...middlewares),
		),
	);

	assignAll(actions, store);

	return store;
}

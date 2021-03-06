import React, { Suspense }  from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore, { history }   from './store/conf_store';
import theRoutes from './router/routes';

const store = configureStore();

ReactDOM.render((
	<Provider store={ store }>
		<ConnectedRouter history={ history }>
			<Suspense fallback={<div>Loading...</div>}>
				<App>
					{
						theRoutes
					}
				</App>
			</Suspense>
		</ConnectedRouter>
	</Provider>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

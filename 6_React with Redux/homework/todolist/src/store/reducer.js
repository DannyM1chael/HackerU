import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import * as ACT from './actions';
import { FORM_ADD } from "../lib/const";

const initialState = { 
	taskList: [], 
	taskForEdit: null, 
	formSate: FORM_ADD, 
};

function rootReducer(store = initialState, action) {
	switch (action.type) {
		case ACT.DATA_TASK_EDIT:
			return { ...store, ...action.payload }; 

		case ACT.DATA_TASK_ADD:
			return { ...store, ...action.payload }; 

		case ACT.DATA_TASK_DELETE:
			return { ...store, ...action.payload }; 

		case ACT.DATA_TASK_UPDATE:
			return { ...store, ...action.payload }; 

		case ACT.DATA_TASK_FORM_RESET:
			return { ...store, ...action.payload }; 

		default:
			return store;
	}
}


export default (history) => combineReducers({
	router: connectRouter(history),
	app: rootReducer,
});
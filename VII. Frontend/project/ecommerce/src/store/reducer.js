import { createReducer } from 'redux-act';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as toastrReducer } from 'react-redux-toastr';
import * as actions from './actions';

const initialState = {
    cart: {},
};

const rootReducer = createReducer({
    [actions.updateCart]: (state, payload) => ({ ...state, cart: payload}),
}, initialState);

export default history => combineReducers({
    router: connectRouter(history),
    app: rootReducer,
    toastr: toastrReducer,
})

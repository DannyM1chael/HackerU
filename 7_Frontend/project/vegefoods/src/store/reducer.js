import { createReducer } from 'redux-act';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as toastrReducer } from 'react-redux-toastr';
import * as actions from './actions';
import products from '../components/api/dataProducts';
import clients from '../components/api/dataClients';
import dataStub from '../components/api/dataStub';

const initialState = {
    home: products,
    shop: products,
    cart: [],
    feedback: clients,
    total: 0,
    volume: 600
}

const rootReducer = createReducer({
    [actions.updateCart]: (state, payload) => ({ ...state, cart: payload }),
    [actions.updateCartCounter]: (state, payload) => { 
    const filtered = state.cart.filter( product => product.id === payload.id);
    filtered[0].quantity = payload.quantity;
    return {
        ...state, 
        cart: [ ...state.cart ],
        };   
    },
    [actions.updateCartTotal]: (state) => {
        const cartTotal = state.shop.reduce((total, product) => total + product.quantity, 0);
        return {
            ...state,
            cart: [...state.shop],
            total: cartTotal
        }
    },
    [actions.deleteItemFromCart]: (state, payload) => {
        const filtered = state.cart.filter( product => product.id !== payload.id);
		return { 
            ...state, 
            cart: [...filtered] }
	},
}, initialState);

export default history => combineReducers({
    router: connectRouter(history),
    app: rootReducer,
    toastr: toastrReducer,
})
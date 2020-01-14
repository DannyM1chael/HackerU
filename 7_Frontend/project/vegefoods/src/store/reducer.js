import { createReducer } from 'redux-act';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as toastrReducer } from 'react-redux-toastr';
import * as actions from './actions';
import products from '../components/api/dataProducts';
import clients from '../components/api/dataClients';
import dataStub from '../components/api/dataStub';

const initialState = {
    shop: products,
    cart: [],
    feedback: clients,
    total: 0
    
}

const rootReducer = createReducer({
    [actions.updateCart]: (state, payload) => ({ ...state, cart: payload }),
    [actions.updateCartCounter]: (state, payload) => { 
    const filtered = state.cart.filter( product => product.id === payload.id);
    if (!filtered.length || filtered.length > 1) {
        return state;
    }
    filtered[0].cnt = payload.cnt;
    return {
        ...state, 
        cart: [ ...state.cart ],
        };   
    },
    [actions.addToCart]: (state, payload) => {
        let addedProduct = state.shop.find(product => product.id === payload.id);
        let existedProduct = state.cart.find( product => payload.id === product.id);
        if (existedProduct) {
            addedProduct += 1;
            return {
                ...state,
                total: state.total + addedProduct.price
            }
        }
        else {
            addedProduct = 1;
            let newTotal = state.total + addedProduct.price;

            return {
                ...state,
                cart: [...state.cart, addedProduct],
                total: newTotal
            }
        }
    }
}, initialState);

export default history => combineReducers({
    router: connectRouter(history),
    app: rootReducer,
    toastr: toastrReducer,
})
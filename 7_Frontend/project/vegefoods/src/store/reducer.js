import { createReducer } from 'redux-act';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as toastrReducer } from 'react-redux-toastr';
import * as actions from './actions';
import Product3 from '../scenes/components/assets/images/product-3.jpg';
import Product4 from '../scenes/components/assets/images/product-4.jpg';

const dataStub = [
    {
        id: 3,
        img: {
            small: Product3,
            large: '',
        },
        title: 'Bell Pepper',
        price: 4.90,
        cnt: 1, 
        total: 4.90,
    },

    {
        id: 4,
        img: {
            small: Product4,
            large: '',
        },
        title: 'Bell Pepper',
        price: 15.70,
        cnt: 1, 
        total: 15.70,
    }
]
const initialState = {
    cart: dataStub,
}

const rootReducer = createReducer({
    [actions.updateCart]: (state, payload) => ({ ...state, cart: payload }),
    [actions.updateCartCounter]: (state, payload) => { 
    const filtered = state.cart.filter( item => item.id === payload.id);
    if (!filtered.length || filtered.length > 1) {
        return state;
    }
    filtered[0].cnt = payload.cnt;
    return {
        ...state, 
        cart: [ ...state.cart ],
        };   
    }
}, initialState);

export default history => combineReducers({
    router: connectRouter(history),
    app: rootReducer,
    toastr: toastrReducer,
})
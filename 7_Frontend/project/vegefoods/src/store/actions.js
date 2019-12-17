import { createAction } from 'redux-act';
import {
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_fAILURE,
} from './actionTypes';
import {fetchProductsApi } from './api/index';

export const updateCart = createAction('updateCart');
export const updateCartCounter = createAction('updateCartCounter');
export const deleteItemFromCart = createAction('deleteItemFromCart');

// export const fetchProducts = () => async dispatch => {
//     dispatch({
//         type: FETCH_PRODUCTS_START
//     })
//     try {
//         const products = await fetchProductsApi()
//         dispatch({
//             type: FETCH_PRODUCTS_SUCCESS,
//             payload: products
//         })
//     } catch (error) {
//         dispatch({
//             type: FETCH_PRODUCTS_fAILURE,
//             payload: error,
//             error: true
//         })
//     }
// }
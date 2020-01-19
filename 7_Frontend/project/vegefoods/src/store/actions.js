import { createAction } from 'redux-act';

export const updateCart = createAction('updateCart');
export const updateCartCounter = createAction('updateCartCounter');
export const updateCartTotal = createAction('updateCartTotal');
export const updateCategories = createAction('updateCategories');
export const deleteItemFromCart = createAction('deleteItemFromCart');


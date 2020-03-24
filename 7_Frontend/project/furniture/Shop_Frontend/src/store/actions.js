// import React  from 'react';
import { createAction } from 'redux-act';


export const updateFilter = createAction('updateFilter');
export const updateCategory = createAction('updateCategory');
export const updateBrands = createAction('updateBrands');
export const updateRanges = createAction('updateRanges');
export const updateColors = createAction('updateColors');
export const updateCart = createAction('updateCart');
export const updateGoods = createAction('updateGoods');
export const updateCartCounter = createAction('updateCartCounter');
export const deleteItemFromCart = createAction('deleteItemFromCart');

import * as R from 'ramda';

export const getPhoneById = (state, id) => R.prop(id, state.phones);

export const getPhones = state => {
    const phones = R.map(id => getPhoneById(state, id), state.phonesPage.ids)
}
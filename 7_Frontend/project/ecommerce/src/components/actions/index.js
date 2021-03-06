import  {
    FETCH_PHONES_START,
    FETCH_PHONES_SUCCESS,
    FETCH_PHONES_FAILURE
} from './actionTypes';
import{ fetchPhonesApi } from './api/index';

export const fetchPhones = () => async dispatch => {
    dispatch({
        type: FETCH_PHONES_START
    })
    try {
        const phones = await fetchPhonesApi()  
        dispatch({
            type: FETCH_PHONES_SUCCESS,
            payload: phones,
        })
    } catch (error) {
        dispatch({
            type: FETCH_PHONES_FAILURE,
            payload: error,
            error: true,
        })
    }
}
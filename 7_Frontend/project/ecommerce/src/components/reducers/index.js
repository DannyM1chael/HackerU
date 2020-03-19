import { combineReducers } from "redux";
import phones from '../reducers/phones';
import { connectRouter } from "connected-react-router";
import phonesPage from './phonesPage';

export default history => combineReducers({
    phones,
    phonesPage,
    router: connectRouter(history)
})


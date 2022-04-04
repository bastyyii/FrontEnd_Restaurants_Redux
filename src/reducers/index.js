import { combineReducers } from 'redux';
import userReducers from './userReducers';
import alertReducer from './alertReducer';
import restaurantReducer from './restaurantReducer';
import branchReducer from './branchReducer';

export default combineReducers({
    user: userReducers,
    alert: alertReducer,
    restaurant: restaurantReducer,
    branch: branchReducer
});
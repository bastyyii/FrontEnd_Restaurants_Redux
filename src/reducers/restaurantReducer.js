import { ADD_NEW_RESTAURANT,
         GET_RESTAURANTS,
         RESTAURANT_USED,
         RESTAURANT_USED_NULL,
         UPDATE_RESTAURANT,
         DELETE_RESTAURANT,
         FORM_TRUE,
         FORM_NULL } from '../Types';

const initialState = {
    restaurants : [],
    form : false,
    restaurantUsed: null
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_NEW_RESTAURANT:
            return {
                ...state,
                restaurants: [...state.restaurants, action.payload],
                form: false,
                error: null,
            }
        case GET_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload
            }
        case RESTAURANT_USED:
            return {
                ...state,
                restaurantUsed: action.payload
            }
        case RESTAURANT_USED_NULL:
            return {
                ...state,
                restaurantUsed: null
            }
        case UPDATE_RESTAURANT:
            return {
                ...state,
                restaurants: state.restaurants.map(restaurant => restaurant._id ===
                    action.payload._id ? action.payload: restaurant),
                form: false
            }
        case DELETE_RESTAURANT:
            return {
                ...state,
                restaurants: state.restaurants.filter(restaurantUsed => restaurantUsed._id !== action.payload),
                restaurantUsed: null
            }
        case FORM_TRUE:
            return {
                ...state,
                form: true
            }
        case FORM_NULL:
            return {
                ...state,
                form: null
            }
        default:
            return state;
    }
}
import { ADD_NEW_RESTAURANT,
         GET_RESTAURANTS,
         RESTAURANT_USED,
         RESTAURANT_USED_NULL,
         UPDATE_RESTAURANT,
         DELETE_RESTAURANT,
         FORM_TRUE,
         FORM_NULL} from '../Types';
         
import clientAxios from "../config/axios";
import { viewAlert } from './alertAction';

export function addNewRestaurant(restaurant){
    return async(dispatch) => {
        try {
            const result = await clientAxios.post('/api/restaurant', restaurant);
            dispatch(addRestaurantExit(result.data))
            dispatch(getRestaurants());
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                classes: 'alerta-error'
            }
            dispatch(viewAlert(alert));
        }
    }
}

const addRestaurantExit = restaurant => ({
    type: ADD_NEW_RESTAURANT,
    payload: restaurant
})

export function getRestaurants(){
    return async(dispatch) => {
        try {
            const result = await clientAxios.get('/api/restaurant');
            dispatch(getRestaurantExit(result.data.restaurants));
        } catch (error) {
            const alert = {
                msg: 'Error al obtener los restaurantes',
                classes: 'alerta-error'
            }
            dispatch(viewAlert(alert));
        }
    }
}

const getRestaurantExit = restaurants => ({
    type: GET_RESTAURANTS,
    payload: restaurants
});

export function updateRestaurant(restaurant){
    return async(dispatch) => {
        try {
            const updateRestaurant = await clientAxios.put(`/api/restaurant/${restaurant._id}`, restaurant);
            dispatch(updateRestaurantExit(updateRestaurant.data.restaurant));
        } catch (error) {
            const alert = {
                msg: 'Error al obtener los restaurantes',
                classes: 'alerta-error'
            }
            dispatch(viewAlert(alert));
        }
    }
}

const updateRestaurantExit = restaurant => ({
    type: UPDATE_RESTAURANT,
    payload: restaurant
});

export function deleteRestaurant(id){
    return async(dispatch) => {
        try {
            await clientAxios.delete(`/api/restaurant/${id}`)
            dispatch(restaurantUsed(id));
            dispatch(deleteRestaurantSuccess(id));
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                classes: 'alerta-error'
            }
            dispatch(viewAlert(alert));
        }
    }
}

const deleteRestaurantSuccess = id => ({
    type: DELETE_RESTAURANT,
    payload: id
});

export const restaurantUsed = id => ({
    type: RESTAURANT_USED,
    payload: id
});

export const restaurantUsedNull = () => ({
    type: RESTAURANT_USED_NULL
});

export const formTrue = () => ({
    type: FORM_TRUE
});

export const formNull = () => ({
    type: FORM_NULL
})
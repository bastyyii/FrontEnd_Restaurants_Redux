import { ADD_NEW_USER, LOGIN_USER, GET_USER, CLOSE_SESSION } from '../Types/index';
import authToken from '../config/authToken';
import clientAxios from '../config/axios';
import { hideAlert, viewAlert } from './alertAction';

export function newUser(user){
    return async(dispatch) => {
        try {
            const result = await clientAxios.post('/api/user', user);
            dispatch(addNewUser(result.data))
            dispatch(getUser());
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                classes: 'alerta-error'
            }
            dispatch(viewAlert(alert));
        }
    }
}

const addNewUser = token => ({
    type: ADD_NEW_USER,
    payload: token
});

export function loginUser(user){
    return async(dispatch) => {
        try {
            const result = await clientAxios.post('/api/auth', user);
            dispatch(loginUserExit(result.data));
            dispatch(getUser());
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                classes: 'alerta-error'
            }
            dispatch(viewAlert(alert));
        }
    }
}

const loginUserExit = token => ({
    type: LOGIN_USER,
    payload: token
});

export function getUser(){
    return async(dispatch) => {
        const token = localStorage.getItem('token');
        if(token){
            authToken(token);
        }
        try {
            const result = await clientAxios.get('/api/auth');
            dispatch(getUserExit(result.data));
        } catch (error) {
        }
    }
}

const getUserExit = user => ({
    type: GET_USER,
    payload: user
});

export const singOff = () => ({
    type: CLOSE_SESSION
});
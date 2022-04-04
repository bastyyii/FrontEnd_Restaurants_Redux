import { ADD_NEW_USER, GET_USER, LOGIN_USER, CLOSE_SESSION } from '../Types';
const initialState = {
    token: localStorage.getItem('token'),
    authenticated: null,
    message: '',
    error: null,
    user: '',
    load: true
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_NEW_USER:
        case LOGIN_USER:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                load: false
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                authenticated: true,
                load: false
            }
        case CLOSE_SESSION:
            localStorage.removeItem('token');
            return {
                ...state,
                authenticated: null,
                token: null,
                user: null,
                load: null
            }
        default:
            return state;
    }
}
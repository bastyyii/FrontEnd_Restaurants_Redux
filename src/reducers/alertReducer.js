import { VIEW_ALERT, HIDE_ALERT } from '../Types';

const initialState = {
    alert: null
}

export default function(state = initialState, action){
    switch(action.type){
        case VIEW_ALERT:
            return {
                ...state,
                alert: action.payload
            }
        case HIDE_ALERT:
            return {
                ...state,
                alert: null
            }
        default: 
            return state;
    }
}
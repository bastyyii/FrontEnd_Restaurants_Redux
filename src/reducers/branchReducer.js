import { ADD_NEW_BRANCH, 
         GET_BRANCH, 
         BRANCH_USED,
         BRANCH_USED_NULL,
         UPDATE_BRANCH} from '../Types';

const initialState = {
    branchs : [],
    branchUsed: null
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_NEW_BRANCH:
            return {
                ...state,
                branchs: [...state.branchs, action.payload]
            }
        case GET_BRANCH:
            return {
                ...state,
                branchs : action.payload
            }
        case BRANCH_USED:
            return {
                ...state,
                branchUsed: action.payload
            }
        case BRANCH_USED_NULL:
            return {
                ...state,
                branchUsed: null
            }
        case UPDATE_BRANCH: 
            return {
                ...state,
                branchs: state.branchs.map(branch => branch._id ===
                    action.payload._id ? action.payload: branch)
            }
        default:
            return state;
    }
}
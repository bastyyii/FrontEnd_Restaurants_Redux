import clientAxios from "../config/axios";

import { ADD_NEW_BRANCH, 
         GET_BRANCH,
         BRANCH_USED,
         BRANCH_USED_NULL,
         UPDATE_BRANCH} from '../Types';

import { viewAlert } from "./alertAction";
import { getRestaurants } from "./restaurantAction";

export function newSucur(branch){
    return async (dispatch) => {
        try {
            const post = await clientAxios.post('/api/branch', branch);
            dispatch(addNewSucur(post.data));
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

const addNewSucur = branch => ({
    type: ADD_NEW_BRANCH,
    payload: branch
});

export function getBranchs(restaurant){
    return async (dispatch) => {
        try {
            const get = await clientAxios.get(`/api/branch/${restaurant}`);
            dispatch(getBranchSuccess(get.data.branch));
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                classes: 'alerta-error'
            }
            dispatch(viewAlert(alert));
        }
    }
}


const getBranchSuccess = branchs => ({
    type: GET_BRANCH,
    payload: branchs
});

export function updateBranch(branch){
    return async(dispatch) => {
        try {
            const updateBranch = await clientAxios.put(`/api/branch/${branch._id}`, branch);
            dispatch(updateBranchSuccess(updateBranch.data.branch));
        } catch (error) {
            const alert = {
                msg: 'Error al obtener los restaurantes',
                classes: 'alerta-error'
            }
            dispatch(viewAlert(alert));
        }
    }
}

const updateBranchSuccess = branch => ({
    type: UPDATE_BRANCH,
    payload: branch
});

export function deleteBranch(id, restaurant){
    return async(dispatch) => {
        try {
            await clientAxios.delete(`/api/branch/${id}/${restaurant}`);
            dispatch(getBranchs(restaurant))
        } catch (error) {
            const alert = {
                msg: 'Error al obtener los restaurantes',
                classes: 'alerta-error'
            }
            dispatch(viewAlert(alert));
        }
    }
}

export const branchUsed = branch => ({
    type: BRANCH_USED,
    payload: branch
})

export const branchUsedNull = () => ({
    type: BRANCH_USED_NULL
})
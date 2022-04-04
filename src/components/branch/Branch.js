import React, {Fragment} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { branchUsed, deleteBranch } from '../../action/branchAction';

const Branch = ({branch}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const restaurant = useSelector(state => state.restaurant.restaurantUsed);


    const editBranch = () => {
        navigate('/newsucur');
        dispatch(branchUsed(branch));
    }

    return (  
        <Fragment>
            <th className='thh'>{branch.nameBranch}</th>
            <th className='thh'>{branch.numberPhone}</th>
            <th className='thh'>{branch.direction}</th>
            <th className='thh'><button onClick={editBranch}>Editar Sucursal</button> </th>
            <th className='thh'><button onClick={() => dispatch(deleteBranch(branch._id, restaurant._id))}>Eliminar Sucursal</button> </th>
        </Fragment>
    );
}
 
export default Branch;
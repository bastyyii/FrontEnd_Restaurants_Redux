import React, {Fragment} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formTrue, restaurantUsed, deleteRestaurant } from '../../action/restaurantAction';

const Restaurant = ({restaurant}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const ver = () => {
        dispatch(restaurantUsed(restaurant));
        navigate('/listsucur');
    }

    const nueva = () => {
        dispatch(restaurantUsed(restaurant));
        navigate('/newsucur');
    }
    const edit = () => {
        dispatch(formTrue());
        dispatch(restaurantUsed(restaurant));
    }
    return ( 
        <Fragment>
            <th className='thh'>{restaurant.nameRestaurant}</th>
            <th className='thh'>{restaurant.numberPhone}</th>
            <th className='thh'>{restaurant.email}</th>
            <th className='thh'>{restaurant.country}</th>
            <th className='thh'>{restaurant.city}</th>
            {restaurant.branch ? <th className='thh'>{restaurant.branch}</th> : <th className='thh'>0</th> }
            
            <th className='thh'> <button 
                onClick={ver}
            >Ver sucursales</button> </th>
            <th className='thh'> <button 
                onClick={nueva}
            >Agregar Sucursal</button> </th>
            <th className='thh'> <button
                onClick={edit}
            >Editar Restaurant</button> </th>
            <th className='thh'> <button
                onClick={() => dispatch(deleteRestaurant(restaurant._id))}
            >Eliminar Restaurant</button> </th>
            
        </Fragment>
    );
}
 
export default Restaurant;
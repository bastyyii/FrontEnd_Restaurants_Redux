import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from '../../action/restaurantAction';
import Restaurant from './Restaurant';

const ListRestaurant = () => {
    const dispatch = useDispatch();

    const authenticated = useSelector(state => state.user.authenticated);
    const restaurants = useSelector(state => state.restaurant.restaurants);
    
    useEffect(() => {
        if(authenticated){
            dispatch(getRestaurants());
        }
    }, [authenticated, dispatch]);

    if(restaurants === []) return <p>No hay Restaurantes para mostrar, comienza agregando 1</p>
    
    return ( 
        <table className='table'>
                <thead className='thead'>
                    <tr className='th'>
                        <th className='th'>Nombre</th>
                        <th className='th'>Telefono</th>
                        <th className='th'>Email</th>
                        <th className='th'>Pais</th>
                        <th className='th'>Ciudad</th>
                        <th className='th'>Sucursales</th>
                        <th className='opciones'>Agregar</th>
                        <th className='opciones'>Ver</th>
                        <th className='opciones'>Editar</th>
                        <th className='opciones'>Eliminar</th>
                    </tr>
                </thead>
                <tbody className='tbody'>
                    { 
                        restaurants?.map(restaurant => (
                            <tr className='th'
                                key={restaurant._id}
                                timeout={200}
                            >
                                <Restaurant
                                    restaurant={restaurant}
                                />
                            </tr>
                        ))
                    }
                </tbody>
            </table>
    );
}
 
export default ListRestaurant;
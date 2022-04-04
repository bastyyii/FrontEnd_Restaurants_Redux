import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../layout/Header';
import { getUser } from '../../action/userAction';
import NewRestaurant from './NewRestaurant';
import ListRestaurant from './ListRestaurant';

const Restaurants = () => {

    const dispatch = useDispatch();

    const user = useSelector(state => state.user.user);
    const token = useSelector(state => state.user.token);
    const form = useSelector(state => state.restaurant.form);
    useEffect(() => {
        async function loadUser() {
            if(!token){
                return;
            }
            try {
                dispatch(getUser());
            } catch (error) {
                
            }
        }
        loadUser();
    }, [token, dispatch, user]);
    return ( 
        <div className='contenedor-app'>
            <div className='seccion-principal'>
                <Header/>
                    { user ?
                        <main>
                            {
                                form ?
                                <div className='contenedor-tareas'>
                                    <NewRestaurant/>
                                </div>
                                :
                                <div className='contenedor-tareas'>
                                    <ListRestaurant/>
                                </div>
                            }
                        </main>
                        : 
                        <main>
                            <h1>Inicia  sesion para comenzar a trabajar</h1>
                        </main>
                    }
                    
            </div>
        </div>
    );
}
 
export default Restaurants;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewRestaurant, updateRestaurant, restaurantUsedNull } from '../../action/restaurantAction';
import { viewAlert, hideAlert } from '../../action/alertAction';
const NewRestaurant = () => {

    const dispatch = useDispatch();

    const [restaurant, saveRestaurant] = useState({
        nameRestaurant: '',
        numberPhone: '',
        email: '',
        city: '',
        country: ''
    });

    const {nameRestaurant, numberPhone, email, city, country} = restaurant;
    const restaurantUsed = useSelector(state => state.restaurant.restaurantUsed);
    const error = useSelector(state => state.restaurant.error);
    const message = useSelector(state => state.restaurant.message);
    const alert = useSelector(state => state.alert.alert);

    useEffect(() => {
        if(restaurantUsed){
            saveRestaurant(restaurantUsed);
        }else{
            saveRestaurant({
                nameRestaurant: '',
                numberPhone: '',
                email: '',
                city: '',
                country: ''
            });
        }
    }, [restaurantUsed]);

    const onChange = e => {
        saveRestaurant({
            ...restaurant,
            [e.target.name] : e.target.value
        });
    } 
    
    const onSubmitNewRestaurant = e => {
        e.preventDefault();
        if(restaurantUsed){
            if(nameRestaurant.trim() === '' || email.trim() === ''){
                const alert = {
                    msg: 'El nombre y el email son obligatorios',
                    classes: 'alerta-error'
                }
                dispatch(viewAlert(alert));
                return;
            }
            dispatch(updateRestaurant(restaurant));
            dispatch(hideAlert());
            dispatch(restaurantUsedNull());
            saveRestaurant({
                nameRestaurant: '',
                numberPhone: '',
                email: '',
                city: '',
                country: ''
            });
            
        }else{
            if(nameRestaurant.trim() === '' || email.trim() === ''){
                const alert = {
                    msg: 'El nombre y el email son obligatorios',
                    classes: 'alerta-error'
                }
                dispatch(viewAlert(alert));
                return;
            }
            dispatch(addNewRestaurant(restaurant));
            dispatch(hideAlert());
            saveRestaurant({
                nameRestaurant: '',
                numberPhone: '',
                email: '',
                city: '',
                country: ''
            });
        }
    }

    return ( 
        <div className='form-usuario'>
            <div className="contenedor-form sombra-dark">
                <h1>Nuevo Restaurante</h1>
                <form
                    onSubmit={onSubmitNewRestaurant}
                >
                { alert ? <p className={alert.classes}>{alert.msg}</p> : null}    
                <div className="campo-form">
                    <label  htmlFor='nameRestaurant'>Nombre Restaurant: </label>
                    <input
                        id='nameRestaurant'
                        name='nameRestaurant'
                        type='text'
                        placeholder="Nombre Restaurante"
                        value={nameRestaurant}
                        onChange={onChange}
                    />
                </div>
                <div className="campo-form">
                    <label  htmlFor='numberPhone'>Numero de telefono: </label>
                    <input
                        id='numberPhone'
                        name='numberPhone'
                        type='text'
                        placeholder="Numero de telefono"
                        value={numberPhone}
                        onChange={onChange}
                    />
                </div>
                <div className="campo-form">
                    <label className="label" htmlFor='email'>Email: </label>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        placeholder="Tu email"
                        value={email}
                        onChange={onChange}
                    />
                </div>
                <div className="campo-form">
                    <label className="label" htmlFor='country'>pais: </label>
                    <input
                        id='country'
                        name='country'
                        type='text' 
                        placeholder="El pais"
                        value={country}
                        onChange={onChange}
                    />
                </div>
                <div className="campo-form">
                    <label className="label" htmlFor='city'>Ciudad: </label>
                    <input
                        id='city'
                        name='city'
                        type='text' 
                        placeholder="La ciudad"
                        value={city}
                        onChange={onChange}
                    />
                </div>
                    <input 
                        className='inputR'
                        type='submit'
                        value="Guardar Restaurante"
                    />
            </form>
        </div>
    </div>    
    );
}
 
export default NewRestaurant; 
                
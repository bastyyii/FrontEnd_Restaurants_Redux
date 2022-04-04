import React, {Fragment} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formTrue, formNull, restaurantUsedNull } from '../../action/restaurantAction';

const Options = () => {
    
    const dispatch = useDispatch();
    const form = useSelector(state => state.restaurant.form);

    const volerAlListado = () => {
        dispatch(formNull());
        dispatch(restaurantUsedNull());
    }

    return ( 
        <Fragment>
            {
                form ?
                    <button 
                        className='btn'
                        onClick={volerAlListado}
                    >Volver al listado</button>
                :
                    <button 
                        className='btn'
                        onClick={() => dispatch(formTrue())}
                    >Agregar Restaurante</button>
            }  
        </Fragment>
    );
}
    
export default Options;

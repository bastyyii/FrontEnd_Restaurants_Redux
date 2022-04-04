import React, {Fragment} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formTrue, formNull } from '../../action/restaurantAction';

const Options = () => {
    
    const dispatch = useDispatch();
    const form = useSelector(state => state.restaurant.form);

    return ( 
        <Fragment>
            {
                form ?
                    <button 
                        className='btn'
                        onClick={() => dispatch(formNull())}
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

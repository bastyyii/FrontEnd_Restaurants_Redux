import React, {Fragment, useEffect} from 'react';
import Branch from './Branch';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getBranchs } from '../../action/branchAction';
import { restaurantUsedNull } from '../../action/restaurantAction';

const ListSucur = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const branchs = useSelector(state => state.branch.branchs);
    const restaurant = useSelector(state => state.restaurant.restaurantUsed);
    
    const volver = () => {
        navigate('/');
        dispatch(restaurantUsedNull());
    }

    useEffect(() => {
        if(!restaurant){
            navigate('/');
        }else{
            dispatch(getBranchs(restaurant._id));
        }
    }, [dispatch, restaurant, navigate]);

    if(branchs.length === 0) return<p>No hay sucursales para mostrar, volviendo al menu</p>

    return (  
        <Fragment>
            <table className='table-branch'>
                <thead className='thead'>
                    <tr className='th'>
                        <th className='th'>Nombre</th>
                        <th className='th'>Telefono</th>
                        <th className='th'>Direccion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        branchs.map(branch => (
                            <tr
                                className='th'
                                key={branch._id}
                                timeout={200}
                            >
                                <Branch
                                    branch={branch}
                                />
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className='div-button'>
                <button className='button-branch' onClick={volver}>Volver</button>
            </div>
        </Fragment>
    );
}
 
export default ListSucur;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { restaurantUsedNull } from '../../action/restaurantAction';
import { viewAlert, hideAlert } from '../../action/alertAction';
import { newSucur, branchUsedNull, updateBranch } from '../../action/branchAction';

const NewSucur = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const restaurantUsed = useSelector(state => state.restaurant.restaurantUsed);
    const alert = useSelector(state => state.alert.alert);
    const branchUsed = useSelector(state => state.branch.branchUsed);

    const [branch, saveBranch] = useState({
        nameBranch: '',
        numberPhone: '',
        direction: ''
    });

    const { nameBranch, numberPhone, direction } = branch;
    
    useEffect(() => {
        if(branchUsed){
            saveBranch(branchUsed);
        }else{
            saveBranch({
                nameBranch: '',
                numberPhone: '',
                direction: ''
            });
        }
    }, [branchUsed]);

    const onChange = e => {
        saveBranch({
            ...branch,
            [e.target.name] : e.target.value
        })
    }

    const back = () => {
        if(branchUsed){
            navigate('/listsucur')
            dispatch(branchUsedNull());
        }else{
            dispatch(restaurantUsedNull());
            navigate('/');
        }
    }

    const onSubmitNewSucur = e => {
        e.preventDefault();
        if(branchUsed){
            if(nameBranch.trim() === ''){
                const alert = {
                    msg: 'El nombre es obligatorio',
                    classes: 'alerta-error'
                }
                dispatch(viewAlert(alert));
                return;
            }
            branch.restaurant = restaurantUsed._id;
            dispatch(updateBranch(branch));
            dispatch(hideAlert());
            dispatch(branchUsedNull());
        }else{
            if(nameBranch.trim() === ''){
                const alert = {
                    msg: 'El nombre es obligatorio',
                    classes: 'alerta-error'
                }
                dispatch(viewAlert(alert));
                return;
            }
            branch.restaurant = restaurantUsed._id;
            dispatch(newSucur(branch));
            dispatch(hideAlert());
            saveBranch({
                nameBranch: '',
                numberPhone: '',
                direction: ''
            });
            navigate('/');
        }
    }
    
    if(!restaurantUsed) return <p>No ha seleccionado un restaurante, eliga uno</p>
    
    return ( 
        <table className='table'>
            { alert ? <p className={alert.classes}>{alert.msg}</p> : null}  
            <thead className='thead'>
                <tr className='th'>
                    <th className='th'>Nombre</th>
                    <th className='th'>Direccion</th>
                    <th className='th'>Telefono</th>
                </tr>
            </thead>
            <tbody className='tbody'>
                <tr className='th'>
                    <th className='th'>
                        <input
                            id='nameBranch'
                            name='nameBranch'
                            type='text'
                            placeholder='Nombre Sucursal'
                            value={nameBranch}
                            onChange={onChange}
                        />
                    </th>
                    <th className='th'>
                        <input
                            id='direction'
                            name='direction'
                            type='text'
                            placeholder='Direccion De la Sucursal'
                            value={direction}
                            onChange={onChange}
                        />
                    </th>
                    <th className='th'>
                        <input
                            id='numberPhone'
                            name='numberPhone'
                            type='text'
                            placeholder='Numero De la Sucursal'
                            value={numberPhone}
                            onChange={onChange}
                        />
                    </th>
                    <th className='th'>
                        <input
                            type='submit'
                            value='Agregar Sucursal'
                            onClick={onSubmitNewSucur}
                        />
                        <input
                            type='submit'
                            onClick={back}
                            value='Volver'
                        />
                    </th>
                </tr>
            </tbody>

        </table>
    );
}
 
export default NewSucur;
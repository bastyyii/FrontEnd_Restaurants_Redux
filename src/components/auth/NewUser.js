import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { newUser, getUser } from '../../action/userAction';
import {useDispatch, useSelector} from 'react-redux';
import { viewAlert, hideAlert } from '../../action/alertAction';

const NewUser = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const authenticated = useSelector(state => state.user.authenticated);
    const alert = useSelector(state => state.alert.alert);

    const [user, saveUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        check: ''
    });

    const { firstName, lastName, email, password, check } = user;
    
    useEffect(() => {
        if(authenticated === true){
            navigate('/');
        }
    }, [authenticated, alert]);

    const onChange = e => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitNewUser = e => {
        e.preventDefault();
        if(firstName.trim() === '' || lastName.trim() === '' || 
        email.trim() === '', password.trim() === '' || check.trim() === ''){
            const alert = {
                msg: 'No pueden haber campos vacios',
                classes: 'alerta-error'
            }
            dispatch(viewAlert(alert));
            return;
        }
        if(password.trim() < 6){
            const alert = {
                msg: 'La contraseña debe ser minimo de 6 caracteres',
                classes: 'alerta-error'
            }
            dispatch(viewAlert(alert));
            return;
        }
        if(password.trim() !== check.trim()){
            const alert = {
                msg: 'Las contraseñas deben coincidir',
                classes: 'alerta-error'
            }
            dispatch(viewAlert(alert));
            return;
        }
        dispatch(hideAlert());
        dispatch(getUser());
        dispatch(newUser(user));
        saveUser({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            check: ''
        });
    }

    return ( 
        <div className='form-usuario'>
            <div className="contenedor-form sombra-dark">
                <h1>Crear Cuenta</h1>
                <form
                    onSubmit={onSubmitNewUser}
                >
                { alert ? <p className={alert.classes}>{alert.msg}</p> : null}    
                    <div className="campo-form">
                        <label  htmlFor='firstName'>Nombre: </label>
                        <input
                            id='firstName'
                            name='firstName'
                            type='text'
                            placeholder="Tu nombre"
                            value={firstName}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label  htmlFor='lastName'>Apellido: </label>
                        <input
                            id='lastName'
                            name='lastName'
                            type='text'
                            placeholder="Tu apellido"
                            value={lastName}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label className="label" htmlFor='email'>Email: </label>
                        <input
                            id='email'
                            name='email'
                            type='email'
                            className="input"
                            placeholder="Tu email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label className="label" htmlFor='password'>password: </label>
                        <input
                            id='password'
                            name='password'
                            type='password' 
                            className="input"
                            placeholder="Tu password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label className="label" htmlFor='check'>Confir. password: </label>
                        <input
                            id='check'
                            name='check'
                            type='password' 
                            className="input"
                            placeholder="Confirma tu contraseña"
                            value={check}
                            onChange={onChange}
                        />
                    </div>
                    <centrar >
                        <input 
                            className='inputlogin'
                            type='submit'
                            value="Iniciar Sesion"
                        />
                    </centrar>
                    
                    <Link  to={'/login'} className='enlace-inicio'>Ir a Iniciar Sesion</Link>
                    
                </form>
            </div>
        </div>    
    );
}
   
export default NewUser;

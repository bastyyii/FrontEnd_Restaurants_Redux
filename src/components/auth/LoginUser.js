import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../action/userAction';
import { Link, useNavigate } from 'react-router-dom';
import { viewAlert, hideAlert } from '../../action/alertAction';

const LoginUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const alert = useSelector(state => state.alert.alert);
    
    const [user, saveUser] = useState({
        email: '',
        password: ''
    })

    const {email, password} = user;

    const authenticated = useSelector(state => state.user.authenticated);
    
    useEffect(() => {
        if(authenticated){
            navigate('/');
        }
    }, [authenticated]);

    const onChange = e => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitLoginUser = e => {
        e.preventDefault();
        if(email.trim() === '' || password.trim() === ''){
            const alert = {
                msg: 'No pueden haber campos vacios',
                classes: 'alerta-error'
            }
            dispatch(viewAlert(alert));
            return;
        }
        if(password.trim() < 6){
            const alert = {
                msg: 'La password debe tener minimo 6 caracteres',
                classes: 'alerta-error'
            }
            dispatch(viewAlert(alert));
            return;
        }
        dispatch(hideAlert());
        dispatch(loginUser(user))
    }

    return ( 
        <div className='login'>
            <div className="contenedor-login sombra-dark">
                <h1>Iniciar Sesion</h1>
                <form
                    onSubmit={onSubmitLoginUser}
                >
                { alert ? <p className={alert.classes}>{alert.msg}</p> : null}
                    <div className="campo-form">
                        <label  htmlFor='email'>Email: </label>
                        <input
                            type='email'
                            className="input"
                            placeholder="Tu email"
                            id='email'
                            name='email'
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label  htmlFor='password'>password: </label>
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
                    <div>
                        <input
                            className='inputlogin'
                            type='submit'
                            value="Iniciar Sesion"
                        />
                    </div>
                    <Link  to={'/'} className='enlace-inicio'>Volver al Inicio</Link>
                    <Link  to={'/newuser'} className='enlace-inicio'>Ir a Registrarse</Link>
                    
                </form>
            </div>
        </div>
    );
}
 
export default LoginUser;
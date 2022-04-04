import React from 'react';
import Options from './Options';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { singOff } from '../../action/userAction';

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const authenticated = useSelector(state => state.user.authenticated);
    const user = useSelector(state => state.user.user);
    
    const irLogin = () => {
        navigate('/login');
    }

    const irNewUser = () => {
        navigate('/newuser');
    }
    return ( 
        <header className='app-header'>
           <p className='nombre-usuario'>Tu gestionador</p>
           {authenticated && user ? <p className='nombre-usuario'>Hola usuario <span>{user.user.firstName}</span></p> : <p className='nombre-usuario'>Dinos quien eres ingresando</p>}
            {
                authenticated ?
                    <nav className='nav-principal'>
                        <Options/>
                        <button
                            className='btn'
                            onClick={() => dispatch(singOff())}
                        >Cerrar Sesion</button>
                    </nav>
                    :
                    <nav className='nav-principal'>
                        <button
                            className='btn'
                            onClick={irLogin}
                        >Iniciar Sesion</button>
                        <button
                            className='btn'
                            onClick={irNewUser}
                        >Registrarse</button>
                    </nav>       
            }
       </header>
    );
}
 
export default Header;
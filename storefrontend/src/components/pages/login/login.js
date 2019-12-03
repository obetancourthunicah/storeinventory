import React from 'react';
import useForm from 'react-hook-form';
import Page from '../../utilities/Page';
import './login.css';
import { Redirect } from 'react-router-dom';
import { useStateValue } from '../../utilities/context';
import { login } from './login.action';

export default () => {
    const { register, errors , handleSubmit} = useForm();
    const [ {auth} ,dispatch] = useStateValue();
    const submitHandler = (data)=>{ login(data, dispatch);};
    if( auth.logged){ return (<Redirect to="/" />) }
    return (
      <Page headerTitle="Iniciar Sesión">
        <form className="loginForm"  onSubmit={handleSubmit(submitHandler)} >
          <input type="email" name="email" placeholder="correo@eletron.co"
            ref={register({required: true})}
           />
           { (errors.email)? (<span>Correo es Requerido</span>): null  }
          <input type="password" name="password" placeholder="contraseña"
            ref={register({required:true})}
          />
          { errors.password && (<span>La Contraseña es requerida</span>) }
          <button type="submit">Iniciar Sesión</button>
        </form>
        { auth.error && <span>Credenciales Incorrectas, Intente de Nuevo</span>}
      </Page>
    );
}

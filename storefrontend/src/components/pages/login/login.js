import React from 'react';
import useForm from 'react-hook-form';
import Page from '../../utilities/Page';
import './login.css';
//import {Link} from 'react-router-dom';
import { useStateValue } from '../../utilities/context';
export default (props) => {
    const [ ,dispach] = useStateValue();
    return (
      <Page headerTitle="Iniciar Sesión">
        <form className="loginForm" >
          <input type="email" name="email" placeholder="correo@eletron.co"/>
          <input type="password" name="password" placeholder="contraseña"/>
          <button type="submit">Iniciar Sesión</button>
        </form>
      </Page>
    );
}


/*
 <button onClick={
          (e)=>{
            dispach(
              {
                type:"LOGGED_SUCCESS",
                payload:{jwt:"some",user:{"name":"Orlando"}}
              }
            );
            props.history.replace('/');
      }
        }>Iniciar Sesión</button>
 */

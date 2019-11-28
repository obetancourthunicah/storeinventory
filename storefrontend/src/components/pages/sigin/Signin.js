import React from 'react';
import Page from '../../utilities/Page';
//import {Link} from 'react-router-dom';
import { useStateValue } from '../../utilities/context';
export default (props) => {
  const [, dispach] = useStateValue();
  return (
    <Page>
      <h1>Crear Cuenta</h1>
      <button onClick={
        (e) => {
          dispach(
            {
              type: "LOGGED_SUCCESS",
              payload: { jwt: "some", user: { "name": "Orlando" } }
            }
          );
          props.history.replace('/');
        }
      }>Iniciar Sesión</button>
    </Page>
  );
}

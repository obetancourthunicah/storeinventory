import React from 'react';
import Page from '../../utilities/Page';
//import {Link} from 'react-router-dom';
import { useStateValue } from '../../utilities/context';
export default (props) => {
  const [, dispach] = useStateValue();
  return (
    <Page>
      <h1>No se encontro Recurso</h1>
    </Page>
  );
}

import React from 'react';
import Page from '../../../utilities/Page';
import {useStateValue} from '../../../utilities/context';


export default (props)=>{
  const [ {prods}, dispatch] = useStateValue();
  return (
    <Page>
      <h1>Mostrando Producto</h1>
      <span>{props.match.params.id}</span>
    </Page>
  )
}

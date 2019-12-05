import React from 'react';
import {useStateValue} from '../../utilities/context';
import Page from '../../utilities/Page';
export default ( { children })=>{
  const [ {auth}, ] = useStateValue();
  if (!auth.initialized){
    return (<Page>
      <h1>Iniciando ...</h1>
    </Page>);
  } else {
    return <div>{children}</div>;
  }
}

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useStateValue } from './context';

export default ({component:InnerComponent,  ...rest })=>{
  const [{auth}, ] = useStateValue();
  return (
    <Route
      {...rest}
      render = {
        (props)=>{
          return (auth.logged) ? (<InnerComponent {...props} />) : (<Redirect to={{pathname:"/login", state:{from:props.location}}} /> );
        }
      }
    />
  );
}

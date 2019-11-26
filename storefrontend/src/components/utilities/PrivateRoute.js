import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({component:InnerComponent, auth, ...rest })=>{
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

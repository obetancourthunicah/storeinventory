import React from 'react';

export const Button=( props )=>{
  return (
    <button>{props.children || null}</button>
  );
}

export  const ConfirmButton = ( props )=>{
  const {onclick, children} = props;
  return ( <button onClick={onclick} >
    {children}
  </button>);
}

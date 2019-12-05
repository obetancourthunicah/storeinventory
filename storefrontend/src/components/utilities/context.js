import React, { createContext, useContext, useReducer } from 'react';
import { configDispatchAxios } from './MyAxios';

export const StateContext = createContext();

let dispatchConfig = false;
export const StateProvider = ({ reducer, initialState, children })=>{
  const reducerValue = useReducer(reducer, initialState)
  const [, dispatch] = reducerValue;
  if (!dispatchConfig){
    configDispatchAxios(dispatch);
    dispatchConfig = true;
  }
  return (
    <StateContext.Provider value={reducerValue}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateValue = () => useContext(StateContext);

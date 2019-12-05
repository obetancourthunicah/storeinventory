import authReducer from './reducers/auth.reducer';
import prodsReducer from './reducers/prods.reducer';

function mainReducer(state={}, action={}) {
  const {auth, prods} = state;
  
  return {
    auth: authReducer(auth, action),
    prods: prodsReducer(prods, action)
  }
}
export default mainReducer;

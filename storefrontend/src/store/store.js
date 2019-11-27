import authReducer from './reducers/auth.reducer';

function mainReducer(state={}, action={}) {
  const {auth} = state;
  return {
    auth: authReducer(auth, action)
  }
}
export default mainReducer;

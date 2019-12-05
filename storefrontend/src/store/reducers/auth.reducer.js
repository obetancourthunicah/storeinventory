const emptyAuth = {
  logged: false,
  jwt: '',
  user: {},
  isFetching: false,
  error: '',
  initialized: false,
}

let initialState = Object.assign({}, emptyAuth, JSON.parse(window.localStorage.getItem("store_auth")));

console.log(initialState)

export const LOGGIN_FETCHING = "LOGGIN_FETCHING"
export const LOGGIN_FETCHING_FAILED = "LOGGIN_FETCHING_FAILED"
export const LOGGED_SUCCESS = "LOGGED_SUCCESS";
export const LOGOUT = "LOGOUT";
export const JWT_INVALID = "JWT_INVALID";
export const APP_INIT = "APP_INIT";

const authReducer = (state=initialState, action={})=>{
  switch (action.type){
    case APP_INIT:
      return {
        ...state,
        initialized:true
      }
    case LOGGED_SUCCESS:
      let newState = {
        ...state,
        logged: true,
        user: action.payload.user,
        jwt: action.payload.jwt,
        isFetching: false,
        error: ''
      };
      let lstate = {...newState};
      delete lstate.initialized;
      window.localStorage.setItem("store_auth", JSON.stringify(lstate));
      return  newState;
    case LOGGIN_FETCHING:
      return {
        ...state,
        isFetching:true,
        error:''
      }
    case LOGGIN_FETCHING_FAILED:
      return {
        ...state,
        isfetching:false,
        error:'Credenciales no pueden ser verificadas, intente de nuevo.'
      }
    case LOGOUT:
      //window.localStorage.removeItem("store_auth")
      return  emptyAuth;

    case JWT_INVALID:
     // window.localStorage.removeItem("store_auth")
      return emptyAuth;
    default:
        return state;
  }
}

export default authReducer;

let initialState = {
  logged:false,
  jwt:'',
  user:{},
  isFetching:false,
  error:''
}

export const LOGGIN_FETCHING = "LOGGIN_FETCHING"
export const LOGGIN_FETCHING_FAILED = "LOGGIN_FETCHING_FAILED"
export const LOGGED_SUCCESS = "LOGGED_SUCCESS";
export const LOGOUT = "LOGOUT";
export const JWT_INVALID = "JWT_INVALID";

const authReducer = (state=initialState, action={})=>{
  console.log(state);
  switch (action.type){
    case LOGGED_SUCCESS:
      return {
        ...state,
        logged:true,
        user:action.payload.user,
        jwt:action.payload.jwt,
        isFetching:false,
        error:''
      }
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
      return {
        ...state,
        logged:false,
        user:{},
        jwt:''
      }
      case JWT_INVALID:
        return {
          ...state,
          logged:false,
          user:{},
          jwt:''
        }
      default:
        return state;
  }
}

export default authReducer;

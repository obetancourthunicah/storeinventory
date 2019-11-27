let initialState = {
  logged:false,
  jwt:'',
  user:{}
}

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
        jwt:action.payload.jwt
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

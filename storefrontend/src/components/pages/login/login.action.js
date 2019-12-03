import axios from 'axios';

export const login = (data, dispatch)=>{
  dispatch({
    type: "LOGGIN_FETCHING",
    payload: {}
  })
  axios.post(
    '/api/sec/login',
    {
      email: data.email,
      pswd: data.password
    }
  )
    .then((response) => {
      if (response.status === 200) {
        dispatch(
          {
            type: "LOGGED_SUCCESS",
            payload: {
              user: response.data.user,
              jwt: response.data.token
            }
          }
        );
      } else {
        dispatch({ type: "LOGGIN_FETCHING_FAILED", payload: {} });
      }
    })
    .catch((err) => {
      dispatch({ type: "LOGGIN_FETCHING_FAILED", payload: {} });
    })
}

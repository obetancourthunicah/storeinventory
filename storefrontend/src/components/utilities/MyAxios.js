import axios from 'axios';

export const normalAxios = axios.create();
normalAxios.defaults.headers.common["cache-control"] = "no-cache";
normalAxios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
normalAxios.defaults.headers.put["Content-Type"] = "application/x-www-form-urlencoded";



export const authAxios = axios.create();
authAxios.defaults.headers.common["cache-control"] = "no-cache";
authAxios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
authAxios.defaults.headers.put["Content-Type"] = "application/x-www-form-urlencoded";

export const configAuthAxios = ( auth)=>{
  authAxios.defaults.headers.common['Authorization'] = `Bearer ${auth.jwt}`;
}

export const configDispatchAxios = (dispatch) =>{
  authAxios.interceptors.response.use(
    (response)=>response ,
    (error)=>{
      if(error.response){
        console.log(error.response);
         switch(error.response.status){
           case 401:
              dispatch(
                { type:"JWT_INVALID", placeholder:{}}
              );
              break;
         } // end switch
      }
      return Promise.reject(error);
    }
  );
}

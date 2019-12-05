import { authAxios } from "../../../utilities/MyAxios";
import { PRODUCT_LOADED, PRODUCT_ERROR } from "../../../../store/reducers/prods.reducer";

export const loadProducts = (page=1, limit=10, dispatch)=>{
    authAxios.get("/api/prd/all")
    .then( (response)=>{
      console.log(response);
      if (response.status === 200){
        dispatch(
          {
            type:PRODUCT_LOADED,
            payload:{
              products: response.data
            }
          }
        );
      }else {
        dispatch(
          {
            type:PRODUCT_ERROR,
            payload:{error:'Error al cargar productos'}
          }
        );
      }
    })
    .catch( (error)=>{
      console.log(error);
      dispatch(
        {
          type: PRODUCT_ERROR,
          payload: { error: 'Error al cargar productos' }
        }
      );
    })
    ;
}

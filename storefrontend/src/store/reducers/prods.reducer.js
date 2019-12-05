const initialState = {
  products:[],
  currentPage:1,
  pageLimit:1,
  fetching:false,
  error:'',
  currentId:null,
}

export const PRODUCT_LOADING="PRODUCT_LOADING";
export const PRODUCT_LOADED = "PRODUCT_LOADED";
export const PRODUCT_ERROR = "PRODUCT_ERROR";
export const PRODUCT_PAGING = "PRODUCT_PAGING";
export const SET_CURRENT_PROD ="SET_CURRENT_PROD";

const prodsReducer = ( state = initialState, action={})=>{
  console.log(action);
  switch (action.type) {
    case SET_CURRENT_PROD:
      return {
        ...state,
        currentId: action.payload.id
      }
    case PRODUCT_LOADING:
      return {...state, fetching:true};
    case PRODUCT_LOADED:
       return {
        ...state,
        products:action.payload.products,
       fetching: false
       };
    case PRODUCT_PAGING:
      return {
        ...state,
        currentPage: action.payload.currentPage,
        pageLimit: action.payload.pageLimit
      }
      case PRODUCT_ERROR:
        return {
          ...state,
          error: action.payload.error,
          fetching:false,
        }
    default:
        return state;
  }
}

export default prodsReducer;

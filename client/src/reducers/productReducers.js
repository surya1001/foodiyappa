import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCTBYID_FAIL,
  GET_PRODUCTBYID_REQUEST,
  GET_PRODUCTBYID_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
} from "../constants/productConstants";

export const getAllProductsReducers = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return { loading: true, ...state };
    case GET_PRODUCT_SUCCESS:
      return { loading: false, products: action.payload };
    case GET_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      return { loading: true };
    case ADD_PRODUCT_SUCCESS:
      return { loading: false, success: true };
    case ADD_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getProductByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCTBYID_REQUEST:
      return { loading: true, ...state };
    case GET_PRODUCTBYID_SUCCESS:
      return { loading: false, product: action.payload };
    case GET_PRODUCTBYID_FAIL:
      return { loading: false, error: action.error };
    default:
      return false;
  }
};

export const updateProductReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT_REQUEST:
      return { updateloading: true };
    case UPDATE_PRODUCT_SUCCESS:
      return { updateloading: false, updatesuccess: true };
    case UPDATE_PRODUCT_FAIL:
      return { updateloading: false, updateerror: action.payload };
    default:
      return state;
  }
};

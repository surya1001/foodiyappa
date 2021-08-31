import {
  GET_ALLORDERS_FAIL,
  GET_ALLORDERS_REQUEST,
  GET_ALLORDERS_SUCCESS,
  GET_ORDERS_FAIL,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  PLACE_ORDER_FAIL,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
} from "../constants/orderConstants";

export const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case PLACE_ORDER_REQUEST:
      return { loading: true };
    case PLACE_ORDER_SUCCESS:
      return { loading: false, success: true };
    case PLACE_ORDER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case GET_ORDERS_REQUEST:
      return { loading: true, ...state };
    case GET_ORDERS_SUCCESS:
      return { loading: false, orders: action.payload };
    case GET_ORDERS_FAIL:
      return { loading: false, error: action.error };
    default:
      return state;
  }
};

export const getAllOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case GET_ALLORDERS_REQUEST:
      return { loading: true };
    case GET_ALLORDERS_SUCCESS:
      return { loading: false, orders: action.payload };
    case GET_ALLORDERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

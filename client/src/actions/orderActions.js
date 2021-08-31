import axios from "axios";
import { toast } from "react-toastify";
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

export const placeOrder = (token, amount) => async (dispatch, getState) => {
  dispatch({ type: PLACE_ORDER_REQUEST });
  const currentUser = getState().signin.currentUser;
  const cartItems = getState().cart.cartItems;

  try {
    const response = await axios.post("/orders/placeOrder", {
      token,
      amount,
      currentUser,
      cartItems,
    });
    console.log(response);
    dispatch({ type: PLACE_ORDER_SUCCESS });
    toast.success("Payment successfull, Order placed");
    window.location.href = "/orders";
    localStorage.removeItem("cartItems");
  } catch (error) {
    console.log(error);
    dispatch({ type: PLACE_ORDER_FAIL });
    toast.error("Payment Failed, Something went wrong");
  }
};

export const getOrders = () => async (dispatch, getState) => {
  dispatch({ type: GET_ORDERS_REQUEST });

  const currentUser = getState().signin.currentUser;

  try {
    const response = await axios.post("/orders/getOrders", {
      userId: currentUser._id,
    });
    dispatch({ type: GET_ORDERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_ORDERS_FAIL, payload: error });
  }
};

export const getAllOrders = () => async (dispatch) => {
  dispatch({ type: GET_ALLORDERS_REQUEST });
  try {
    const response = await axios.get("/orders/getAllOrders");
    console.log(response);
    dispatch({ type: GET_ALLORDERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_ALLORDERS_FAIL, payload: error });
  }
};

export const deliver = (_id) => async (dispatch) => {
  try {
    const response = await axios.post("/orders/deliver", {
      _id,
    });
    console.log(response);
    alert("Order Delivered");
    const orders = await axios.get("/orders/getAllOrders");
    dispatch({ type: GET_ALLORDERS_SUCCESS, payload: orders.data });
  } catch (error) {
    console.log(error);
  }
};

import axios from "axios";
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

export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST });

  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/getProducts`);
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAIL, payload: error });
  }
};

export const getProductById = (id) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTBYID_REQUEST });

  try {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/getProductById`, {
      id,
    });
    console.log(response);
    dispatch({ type: GET_PRODUCTBYID_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTBYID_FAIL, payload: error });
  }
};

export const addProduct = (product) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT_REQUEST });

  try {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/addProduct`, {
      product,
    });
    console.log(response);
    dispatch({ type: ADD_PRODUCT_SUCCESS });
    window.location.href = "/admin/products";
  } catch (error) {
    dispatch({ type: ADD_PRODUCT_FAIL, payload: error });
  }
};

export const updateProduct = (updatedproduct) => async (dispatch) => {
  dispatch({ type: UPDATE_PRODUCT_REQUEST });

  try {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/updateProduct`, {
      updatedproduct,
    });
    console.log(response);
    dispatch({ type: UPDATE_PRODUCT_SUCCESS });
    window.location.href = "/admin/products";
  } catch (error) {
    dispatch({ type: UPDATE_PRODUCT_FAIL });
  }
};

export const deleteProduct = (_id) => async () => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/deleteProduct`, {
      _id,
    });

    alert("Pizza deleted successfully");
    console.log(response);
    window.location.reload();
  } catch (error) {
    console.log("Something went wrong" + error);
  }
};

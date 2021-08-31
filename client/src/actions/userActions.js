import axios from "axios";
import { toast } from "react-toastify";
import {
  GET_USERS_FAIL,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../constants/userConstants";

export const signupUser = (user) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST });

  try {
    const response = await axios.post("/users/signup", user);
    console.log(response);
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: USER_SIGNUP_FAIL, payload: error });
  }
};

export const signinUser = (user) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST });

  try {
    const response = await axios.post("/users/signin", user);
    console.log(response);
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: response.data });

    localStorage.setItem("currentUser", JSON.stringify(response.data));
    toast.success("User Logged in");
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error });
  }
};

export const signoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("cartItems");
  window.location.href = "/signin";
};

export const getallusers = () => async (dispatch) => {
  dispatch({ type: GET_USERS_REQUEST });

  try {
    const response = await axios.get("/users/getallusers");
    console.log(response);
    dispatch({ type: GET_USERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_USERS_FAIL, payload: error });
  }
};

export const deleteuser = (_id) => async () => {
  try {
    const response = await axios.post("/users/deleteuser", {
      _id,
    });

    alert("User deleted successfully");
    console.log(response);
    window.location.reload();
  } catch (error) {
    alert("something went wrong");
    console.log(error);
  }
};

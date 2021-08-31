import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getAllProductsReducers,
  addProductReducer,
  getProductByIdReducer,
  updateProductReducer,
} from "./reducers/productReducers";

import { cartReducer } from "./reducers/cartReducers";
import {
  signupReducer,
  signinReducer,
  getallUsersReducers,
} from "./reducers/userReducers";
import {
  orderReducer,
  getOrdersReducer,
  getAllOrdersReducer,
} from "./reducers/orderReducers";

const finalReducer = combineReducers({
  signup: signupReducer,
  signin: signinReducer,
  getallUsers: getallUsersReducers,

  getAllProducts: getAllProductsReducers,
  getProductById: getProductByIdReducer,
  addProduct: addProductReducer,
  updateProduct: updateProductReducer,

  cart: cartReducer,

  getOrders: getOrdersReducer,
  order: orderReducer,
  getAllOrders: getAllOrdersReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const orders = localStorage.getItem("orders")
  ? JSON.parse(localStorage.getItem("orders"))
  : null;

const initialState = {
  cart: { cartItems: cartItems },
  signin: { currentUser: currentUser },
  order: { orders: orders },
};

const store = createStore(
  finalReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

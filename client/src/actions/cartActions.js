import { toast } from "react-toastify";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartConstants";

export const addToCart = (product, quantity) => (dispatch, getState) => {
  let cartItem = {
    _id: product._id,
    name: product.name,
    image: product.image,
    price: product.price,
    quantity,
  };
  dispatch({ type: ADD_TO_CART, payload: cartItem });

  if (cartItem.quantity <= 0) {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
    toast.error("Product Removed from cart");
  } else {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
    toast.info("Product added too cart");
  }
  const cartItems = getState().cart.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
  dispatch({ type: REMOVE_FROM_CART, payload: product });
  const cartItems = getState().cart.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
